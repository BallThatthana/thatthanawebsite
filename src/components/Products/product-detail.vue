<template>
  <div v-if="isLoading" class="flex justify-center items-center min-h-screen w-full bg-white">
    <flower-spinner
      :animation-duration="2500"
      :size="60"
      color="#000000"
    />
  </div>

  <div v-else class="w-full max-w-5xl mx-auto px-6 pt-28 pb-16 transition-all duration-300">
    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
      
      <div class="w-full aspect-square overflow-hidden bg-gray-50 p-6 flex items-center justify-center border border-black/5">
        <img 
          class="max-w-full max-h-[400px] object-contain transition-transform duration-500 hover:scale-102" 
          :src="product.image" 
          :alt="product.title"
        />
      </div>

      <div class="flex flex-col justify-start space-y-6">
        
        <div class="space-y-2">
          <span class="inline-block text-[10px] uppercase font-mono tracking-widest text-black/40 bg-black/5 px-2 py-1 rounded-none">
            {{ product.category }}
          </span>
          <h1 class="text-black text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
            {{ product.title }}
          </h1>
          <p class="text-xl font-semibold text-black/80 pt-1">
            ${{ product.price }}
          </p>
        </div>

        <div class="w-full h-[1px] bg-black/10"></div>

        <div class="space-y-2">
          <h4 class="text-xs font-bold uppercase tracking-wider text-black/80">Description</h4>
          <p class="text-black/70 text-sm sm:text-base font-light leading-relaxed">
            {{ product.description }}
          </p>
        </div>

        <div class="pt-4 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:space-x-4">
          <button 
            @click="handleAddToCart"
            type="button" 
            class="w-full sm:w-auto bg-black text-white hover:bg-black/10 hover:text-black border border-black font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-all duration-300 transform active:scale-[0.98]"
          >
            Add to cart
          </button>
          
          <router-link :to="{ name: 'products' }" class="block w-full sm:w-auto">
            <button 
              type="button" 
              class="w-full bg-transparent text-black border border-black/20 hover:border-black font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-none transition-colors"
            >
              Back to Shop
            </button>
          </router-link>
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
  name: 'ProductDetail',
  components: {
    FlowerSpinner,
    Footer
  },
  data() {
    return {
      product: null
    }
  },
  computed: {
    ...mapGetters(['isLoading'])
  },
  async mounted() {
    this.showLoader();
    await this.fetchProductDetail();
    this.hideLoader();
  },
  methods: {
    ...mapMutations(['display_cart']),
    ...mapActions(['showLoader', 'hideLoader', 'addCart']),
    
    // Laser targeted single item API call parameter parsing logic
    async fetchProductDetail() {
      const productId = this.$route.params.id;
      if (!productId) return;
      
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        this.product = response.data;
      } catch (err) {
        console.error("Store detail network fetching routine failure:", err);
      }
    },
    
    // Adds item to Vuex store and instantly triggers top navigation layout minicart overlay slideout
    handleAddToCart() {
      if (this.product) {
        this.$store.dispatch('addCart', this.product);
        this.display_cart(true);
      }
    }
  }
}
</script>

<style scoped>
/* Scoped overrides removed safely. Responsive geometry is completely driven by dynamic grid flex layout controls. */
</style>