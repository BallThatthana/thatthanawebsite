<template> 
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen w-full bg-white">
    <flower-spinner
      :animation-duration="2500"
      :size="60"
      color="#000000"
    />
  </div>

  <div v-else class="w-full max-w-5xl mx-auto px-6 pt-28 pb-16 transition-all duration-300">
    <div v-if="!cartItems.length" class="text-center py-20">
      <h3 class="text-black text-xl sm:text-2xl font-bold tracking-tight mb-4">Your Cart is Empty</h3>
      <p class="text-black/60 text-sm font-light mb-6">Please choose some items from our showcase catalog to proceed.</p>
      <router-link :to="{ name: 'products' }">
        <button class="bg-black text-white hover:bg-black/10 hover:text-black border border-black font-bold text-xs uppercase tracking-widest px-8 py-3.5 rounded-none transition-all duration-300">
          Return to Shop
        </button>
      </router-link>
    </div>

    <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <div class="lg:col-span-7 space-y-6">
        <div class="pb-4 border-b border-black/10">
          <h3 class="text-xs font-bold uppercase tracking-widest text-black">Review Order</h3>
        </div>
        
        <div class="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
          <div 
            v-for="item of uniqueCartItems" 
            :key="item.id"
            class="flex flex-col space-y-3 pb-4 border-b border-black/5"
          >
            <div class="flex items-start justify-between gap-4">
              <span class="text-sm font-medium text-black/90 line-clamp-2 leading-snug">{{ item.title }}</span>
              <button 
                @click="removeItem(item)"
                class="text-xs font-mono text-black/40 hover:text-red-600 transition-colors uppercase tracking-tighter"
              > 
                Remove
              </button>
            </div>
            
            <div class="flex items-center justify-between">
              <div class="flex items-center border border-black/20 rounded-none bg-transparent">
                <button @click="reduceQTY(item)" class="px-2.5 py-0.5 text-black/60 hover:text-black hover:bg-black/5 transition-colors font-light text-sm">-</button>
                <span class="px-2 text-xs font-mono font-medium min-w-[20px] text-center">{{ itemQuantity[item.id] }}</span>
                <button @click="increaseQTY(item)" class="px-2.5 py-0.5 text-black/60 hover:text-black hover:bg-black/5 transition-colors font-light text-sm">+</button>
              </div>
              <div>
                <span class="text-sm font-bold tracking-tight">${{ (item.price * itemQuantity[item.id]).toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 bg-gray-50/50 p-6 border border-black/5 space-y-6">
        
        <div class="space-y-3 pb-4 border-b border-black/10">
          <h3 class="text-xs font-bold uppercase tracking-widest text-black">Order Summary</h3>
          <div class="flex items-center justify-between pt-2">
            <span class="text-sm font-medium text-black/60">Total Items:</span>
            <span class="text-sm font-mono font-bold text-black">{{ cartItems.length }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold uppercase tracking-wider text-black/60">Order Total:</span>
            <span class="text-xl font-bold tracking-tight text-black">${{ cartTotal.toFixed(2) }}</span>
          </div>
        </div>
        
        <div class="pt-2 pb-1">
          <h3 class="text-xs font-bold uppercase tracking-widest text-black">Shipping Details</h3>
        </div>
        
        <form @submit.prevent="sendOrderEmail" class="space-y-4">
          <div class="form-group">
            <input
              name="name"
              type="text"
              id="name"
              class="w-full bg-white border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light"
              placeholder="Your Full Name"
              v-model="form.name"
              required
            />
          </div>

          <div class="form-group">
            <input
              name="company"
              type="text"
              id="company"
              class="w-full bg-white border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light"
              placeholder="Company Name (Optional)"
              v-model="form.company"
            />
          </div>

          <div class="form-group">
            <input
              name="email" 
              type="email"
              id="form-email"
              class="w-full bg-white border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light"
              placeholder="Email Address"
              v-model="form.email"
              required
            />
          </div>

          <div class="form-group">
            <textarea
              name="textarea" 
              id="textarea"
              rows="3"
              class="w-full bg-white border border-black/10 text-black text-sm rounded-none p-3 focus:outline-none focus:border-black transition-colors placeholder:text-black/40 font-light resize-none"
              placeholder="Full Delivery Address"
              v-model="form.address"
              required
            ></textarea>
          </div>

          <div class="pt-2">
            <button 
              type="submit"
              class="w-full bg-black text-white hover:bg-black/10 hover:text-black border border-black font-bold text-xs uppercase tracking-widest py-4 rounded-none transition-all duration-300 transform active:scale-[0.99]"
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { showSweetAlert } from '../../Store/utils/sweetalert';
import axios from 'axios';
import { FlowerSpinner } from 'epic-spinners';
import { api } from '@/services/api';
import Footer from '../FrontPage/footer.vue';

export default {
  name: 'StoreCheckout',
  emits: ['close'],
  components: {
    FlowerSpinner,
    Footer
  },
  computed: {
    ...mapGetters(['cartItems', 'isLoading']),
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
    // Dynamically aggregates item totals right out of your checkout state loop array
    cartTotal() {
      return this.cartItems.reduce((acc, item) => {
        return acc + (item.price * (item.quantity || 1));
      }, 0);
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        company: '',
        address: '',
      },
    }
  },
  async mounted() {
    this.showLoader();
    this.hideLoader();
  },
  methods: {
    ...mapActions(['showLoader', 'hideLoader', 'removeCart', 'increaseCartItem', 'decreaseCartItem']),
    
    async sendOrderEmail() {
      try {  
        const { name, email, company, address } = this.form;
        this.showLoader();

        await axios.post(api.sendEmail, {
          name,
          email,
          company, 
          address,
          items: this.cartItems
        });
   
        showSweetAlert('success', 'Order placed successfully', false, 1500);
        
        setTimeout(() => {
          this.form = {
            name: '',
            email: '',
            company: '',
            address: '',
          };
          this.$store.dispatch('clearCart', []);
          this.hideLoader();
          this.$router.push('/products');
        }, 3000);
      } catch (err) {
        showSweetAlert('error', 'An error occurred during transaction processing.', false, 1500);
        this.hideLoader();
      }
    },
    reduceQTY(item) {
      this.decreaseCartItem(item);
    },
    increaseQTY(item) {
      this.increaseCartItem(item);
    },
    removeItem(item) {
      this.removeCart(item);
    }
  }
}
</script>

<style scoped>
/* Extra style properties cleaned out. Structure scales fluidly across viewports. */
</style>