<template>
  <div 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b"
    :class="isScrolled 
      ? 'bg-black/80 backdrop-blur-md border-white/10 py-4 shadow-lg' 
      : 'bg-black border-transparent py-5'"
  >
    <nav id="navbar" class="max-w-5xl w-full mx-auto px-6 flex items-center justify-between">
      
      <div class="flex items-center space-x-3 select-none">
        <template v-if="$route.path.startsWith('/products') || $route.name === 'checkout'">
          <div class="font-bold text-white text-lg tracking-tight">
            <router-link :to="{ name: 'products' }">Sample Shop</router-link>
          </div>
          <router-link 
            :to="{ name: 'home' }"
            class="text-[10px] font-mono tracking-wider uppercase bg-white/10 hover:bg-white text-white/80 hover:text-black border border-white/10 px-2.5 py-1 transition-all duration-300"
          >
            Portfolio
          </router-link>
        </template>

        <template v-else>
          <div class="font-bold text-white text-lg tracking-tight hover:text-white/80 transition-colors">
            <router-link :to="{ name: 'home' }">Bon Thatthana</router-link>
          </div>
        </template>
      </div>
      
      <div class="flex items-center space-x-4 md:space-x-6">
        
        <div 
          v-if="!$route.path.startsWith('/products') && $route.name !== 'checkout'"
          class="text-[10px] font-mono tracking-wider uppercase bg-white/10 hover:bg-white text-white/80 hover:text-black border border-white/10 px-2.5 py-1 transition-all duration-300"
        >
          <router-link :to="{ name: 'products' }">Sample Shop</router-link>
        </div>
        
        <div v-if="$route.path === '/'" class="flex items-center">
          <button 
            v-if="isAuth"
            @click="onLogOut"
            class="text-xs font-semibold text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 rounded-md px-3 py-1.5 transition-all"
          >
            Log out
          </button>
          <button
            v-else
            @click="clickToSignUp"
            class="text-xs font-semibold text-black bg-white hover:bg-white/90 rounded-md px-3 py-1.5 shadow-sm transition-all"
          >
            Sign up
          </button>
        </div>
        
        <div 
          v-if="$route.path.startsWith('/products') || $route.name === 'checkout'"
          @click="displayCart"
          class="relative flex items-center space-x-2 text-white/90 hover:text-white cursor-pointer transition-colors text-sm md:text-base font-medium select-none group pr-1.5"
        >
          <i class="fas fa-shopping-bag"></i>
          <span>Cart</span>
          
          <span 
            v-if="totalCartCount > 0"
            class="absolute -top-2 -right-2 bg-white text-black font-mono font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center shadow-sm animate-fade-in"
          >
            {{ totalCartCount }}
          </span>
        </div>

      </div>
    </nav>

    <div v-if="showCart" class="cart">
      <Cart @close="closeCart"/>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Cart from '../Utils/cart.vue'

export default {
  name: 'MainNavigation',
  components: {
    Cart
  },
  computed: {
    ...mapGetters(['showCart', 'isAuth', 'cartItems']),
    totalCartCount() {
      if (!this.cartItems) return 0;
      return this.cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
    }
  },
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll()
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    ...mapMutations(['display_cart']),
    closeCart() {
      this.display_cart(false)
    },
    displayCart() {
      this.display_cart(true)
    },
    clickToSignUp() {
      this.$router.push('/login')
    },
    handleScroll() { 
      this.isScrolled = window.scrollY > 10;
    },
    onLogOut() {
      this.$store.dispatch('logOut')
      this.$store.commit('closeLogin')
    }
  }
}
</script>