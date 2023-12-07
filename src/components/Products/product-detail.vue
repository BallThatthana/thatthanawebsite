<template>
    <div class="main w-sm:px-20 w-full mx-auto">
        <div v-if="isLoading"
            class="spinner flex justify-center items-center min-h-screen">
                <flower-spinner
                    :animation-duration="2500"
                    :size="70"
                    color="#ff1d5e"
                />
        </div>
        <div v-else 
            class="w-full p-4 p-md-5 mb-4 rounded">
            <div v-if="selectedProduct" class="px-0 flex flex-col xs:flex-row justify-start items-start gap-10 flex-wrap">
                <div class="image-container mx-auto justify-center content-center items-center w-full sm:w-1/2">
                    <img class="" :src="selectedProduct.image" />
                </div>
                <div class="flex flex-col flex-wrap sm:justify-start sm:content-start w-full lg:w-1/2">
                    <p class="blog-post-meta">category: <strong>{{selectedProduct.category}}</strong></p>
                    <h1 class="text-2xl p-0 text-start m-0">Product Title {{ selectedProduct.title }}</h1>
                    <p class="lead my-3">Product Descriptiton {{ selectedProduct.description }}</p>
                    <h3 class="pb-4 mb-4 border-bottom text-end font-bold sm:items-end ">
                        {{ selectedProduct.price }} $
                    </h3>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { FlowerSpinner } from 'epic-spinners';
import { mapGetters, mapActions} from 'vuex';
import axios from 'axios';
export default {
    components: {
        FlowerSpinner
    },
    data(){
        return {
            products: []
        }
    },
    computed:{
        ...mapGetters(['cartItems', 'isLoading']),
        selectedProduct() {
            const productId = this.$route.params.id;
            // if(this.cartItems.length > 0){
            //     const cartProduct = this.cartItems.find((product) => product.id === productId);
            //     console.log(cartProduct, 'cartProduct')
            //     return cartProduct
            // }

            if(this.products) {
                const apiProduct = this.products.find((product) => product.id === parseInt(productId))
                if(apiProduct){
                    console.log(apiProduct, 'apiProduct')
                    return apiProduct
                }
            }
            return {}
        }
    },
    methods: {
        ...mapActions(['showLoader', 'hideLoader', 'addCart']),
        async fetchProducts(){
            if(this.products.length === 0){
                try {
                const response = await axios.get(`https://fakestoreapi.com/products`)
                this.products = response.data;
                //this.$store.commit('setProducts', response.data )
                } catch (err) {
                    console.error(err);
                }
            }
        },
    },
    // beforeRouteUpdate(to, from, next){
    //     this.fetchProducts().then(()=>{
    //         next();
    //     })
    // },
    async mounted() {
        this.showLoader();
        await this.fetchProducts();
        this.hideLoader();
    },
}
</script>
<style scoped>
.main {
    padding: 40px 20px;
    width: auto;
    max-width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
}
.image-container {
    height: auto;
    max-width: 350px;
    margin:auto;
    display: flex;
    justify-content: center;
}
img {
    max-width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
}
</style>