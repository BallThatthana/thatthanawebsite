<template>
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen w-full bg-white">
    <flower-spinner
      :animation-duration="2500"
      :size="60"
      color="#000000"
    />
  </div>

  <div v-else id="main-container" class="w-full max-w-5xl mx-auto px-6 pt-28 pb-16 transition-all duration-300" @click="closeCart">
    
    <div class="text-center mb-12 md:mb-16">
      <h2 class="text-black text-3xl sm:text-4xl font-bold tracking-tight mb-2">
        Sample Products
      </h2>
      <p class="text-black/60 text-sm font-light tracking-wide max-w-md mx-auto">
        Browse a simulated showcase of items executing network updates straight through an API pipeline.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
      
      <div 
        class="group flex flex-col justify-between bg-white border border-black/5 rounded-none p-4 transition-all duration-300 hover:shadow-xl w-full max-w-sm"
        v-for="product in products" 
        :key="product.id"
      >
        <div class="space-y-4">
          <div class="w-full aspect-square overflow-hidden bg-gray-50 p-2 flex items-center justify-center">
            <router-link :to="{ name: 'product-detail', params: {id: product.id}}" class="block w-full h-full relative">
              <img 
                @click="pushToState(product)" 
                class="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                :src="product.image" 
                :alt="product.title"
              />
            </router-link>
          </div>

          <div class="space-y-1">
            <h5 class="text-black font-bold text-base tracking-tight truncate">{{ product.title }}</h5>
            <p class="text-black/60 text-sm font-semibold">${{ product.price }}</p>
          </div>
        </div>

        <div class="mt-6 space-y-2">
          <router-link :to="{ name: 'product-detail', params: {id: product.id}}" class="block w-full">
            <button 
              @click="pushToState(product)"
              type="button" 
              class="w-full bg-transparent text-black border border-black/20 hover:border-black font-semibold text-xs uppercase tracking-wider py-2.5 transition-colors rounded-none"
            >
              View Details
            </button>
          </router-link>
          
          <button 
            @click="addToCart(product)"
            type="button" 
            class="w-full bg-black text-white hover:bg-black/10 hover:text-black border border-black font-bold text-xs uppercase tracking-wider py-2.5 transition-all rounded-none"
          >
            Add to cart
          </button>
        </div>

      </div>

    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { FlowerSpinner } from 'epic-spinners';
import axios from 'axios';
import Footer from '../FrontPage/footer.vue';

export default {
  name: 'ProductCatalog',
  components: {
    FlowerSpinner,
    Footer
  },
  computed: {
    ...mapGetters(['isLoading', 'showCart'])
  },                                                      
  data() {
    return {
      products: []
    }
  },
  async mounted() {
    await this.fetchProducts();
    this.hideLoader();
  },
  methods: {
    ...mapMutations(['display_cart']),
    ...mapActions(['showLoader', 'hideLoader', 'addCart']),
    closeCart() {
      // Closes cart overlay cleanly if active
      if(this.showCart) {
        this.display_cart(false);
      }
    },
    async pushToState(item) {
      this.showLoader();
      await this.$store.dispatch('addCart', item)
    },
    addToCart(item) {
      this.$store.dispatch('addCart', item)
      this.display_cart(true)
    },
    async fetchProducts() {
      try {
        this.showLoader();
        const response = await axios.get(`https://fakestoreapi.com/products`)
        this.products = response.data;
      } catch (err) {
        console.error("Failed to load storefront metrics:", err);
      }
    }
  }
}
</script>

<style scoped> 
/* Custom layout overrides completely dropped. All parameters managed perfectly through utility layers. */
</style>