<template>
  <div class="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998] transition-all duration-300" @click="closeCart"></div>
  
  <div class="fixed top-0 right-0 h-full w-full max-w-md bg-white text-black shadow-2xl z-[9999] flex flex-col justify-between transition-all duration-300 rounded-none border-l border-black/5">
    
    <div class="p-6 overflow-y-auto flex-1">
      <div class="flex items-center justify-between pb-6 border-b border-black/10 mb-6">
        <h3 class="text-xs font-bold uppercase tracking-widest text-black">
          Shopping Bag
        </h3>
        <button @click="closeCart" class="text-black/40 hover:text-black text-sm uppercase font-mono tracking-tight transition-colors">
          Close
        </button>
      </div>

      <div class="space-y-6">
        <div 
          v-for="item of uniqueCartItems" 
          :key="item.id"
          class="flex flex-col space-y-3 pb-6 border-b border-black/5"
        >
          <div class="flex items-start justify-between gap-4">
            <span class="text-sm font-medium text-black/90 line-clamp-2 leading-snug">{{ item.title }}</span>
            <button 
              @click="removeItem(item)"
              class="text-xs font-mono text-black/40 hover:text-red-600 transition-colors uppercase tracking-tighter pt-0.5"
            > 
              Remove
            </button>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center border border-black/20 rounded-none bg-transparent">
              <button @click="reduceQTY(item)" class="px-3 py-1 text-black/60 hover:text-black hover:bg-black/5 transition-colors font-light text-sm">-</button>
              <span class="px-2 text-xs font-mono font-medium min-w-[20px] text-center">{{ itemQuantity[item.id] }}</span>
              <button @click="increaseQTY(item)" class="px-3 py-1 text-black/60 hover:text-black hover:bg-black/5 transition-colors font-light text-sm">+</button>
            </div>
            <div>
              <span class="text-sm font-bold tracking-tight">${{ (item.price * itemQuantity[item.id]).toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-6 border-t border-black/10 bg-gray-50/50 space-y-4">
      <div class="flex items-center justify-between">
        <span class="text-xs font-bold uppercase tracking-wider text-black/60">Estimated Total</span>
        <span class="text-lg font-bold tracking-tight">${{ cartTotal.toFixed(2) }}</span>
      </div>
      <button 
        @click="checkout(cartItems)"
        class="w-full bg-black text-white hover:bg-black/10 hover:text-black border border-black font-bold text-xs uppercase tracking-widest py-4 rounded-none transition-all duration-300 transform active:scale-[0.99]"
      >
        Proceed to Checkout
      </button>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'ShoppingBagDrawer',
  emits: ['close'],
  computed: {
    ...mapGetters(['cartItems']),
    uniqueCartItems() {
      const validItems = this.cartItems.filter(item => item !== undefined);
      const uniqueItems = [...new Set(validItems.map(item => item.id))];
      return uniqueItems.map(id => validItems.find(item => item.id === id));
    },
    itemQuantity() {
      const quantityMap = {};
      this.cartItems.forEach(item => {
        if (quantityMap[item.id]) {
          quantityMap[item.id] += item.quantity;
        } else {
          quantityMap[item.id] = item.quantity;
        }
      });
      return quantityMap;
    },
    cartTotal() {
      return this.cartItems.reduce((acc, item) => {
        return acc + (item.price * (item.quantity || 1));
      }, 0);
    }
  },
  methods: {
    ...mapActions(['removeCart', 'increaseCartItem', 'decreaseCartItem']),
    ...mapMutations(['display_cart']),
    checkout(items) {
      this.$store.commit('setProducts', items)
      this.display_cart(false)
      this.$router.push({ name: 'checkout' })
    },
    reduceQTY(item) {
      this.decreaseCartItem(item);
    },
    increaseQTY(item) {
      this.increaseCartItem(item);
    },
    closeCart() {
      this.$emit('close');
    },
    removeItem(item) {
      this.removeCart(item)
    }
  }
}
</script>

<style scoped>
/* Scoped metrics safely extracted out. Responsive sidebar tracking relies purely on native tailwind positioning tools. */
</style>