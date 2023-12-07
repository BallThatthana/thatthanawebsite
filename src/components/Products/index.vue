<template>
    <div 
        v-if="isLoading"
        class="spinner flex justify-center items-center min-h-screen"
        >
            <flower-spinner
                :animation-duration="2500"
                :size="70"
                color="#ff1d5e"
            />
    </div>
    <div v-else id="main-container" class="container-fluid m-auto" @close="closeCart">
        <h2>Sample Products Page</h2>
        <div class="container">
            <div 
                class="card rounded-lg"
                    v-for="product in products" 
                    :key="product.id"
                    >
                <div class="img-container mx-auto">
                    <router-link :to="{ name: 'product-detail', params: {id: product.id}}">
                    <img @click="pushToState(product)" class="card-img" :src="product.image" />
                    </router-link>
                </div>
                <div class="card-text overflow-hidden">
                    <h5 class="card-title font-bold max-w-xs truncate">{{ product.title }}</h5>
                    <!-- <p class="card-description">{{ product.description }}</p> -->
                </div>
                <div class="mt-2">
                    <router-link :to="{ name: 'product-detail', params: {id: product.id}}">
                        <button 
                            @click="pushToState(product)"
                            type="button" 
                            class="outline outline-black-500 rounded-md font-semibold px-2 py-1 mt-1 w-full"
                            >
                            View
                        </button>
                    </router-link>
                    <div class="mt-2">
                       <div class="">
                            <button 
                                @click="addToCart(product)"
                                type="button" 
                                class="outline rounded-md font-semibold px-2 py-1 mt-1 w-full">
                                Add to cart
                            </button>
                       </div>
                       <!-- <div class="">
                            <button type="button" 
                                @click="deletePost(product.id)" 
                                class="btn bg-red-400 rounded-xl text-white font-semibold px-2 py-1 mt-1 w-full"
                            >Delete
                            </button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { mapActions, mapMutations, mapGetters } from 'vuex';
import { FlowerSpinner } from 'epic-spinners';
// //import { getStorage, ref, uploadBytes,getDownloadURL  } from "firebase/storage";
// //import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
// //import { db } from '../../firebase';
// //import axios from 'axios';
// //import { ImageCompressor } from 'image-compressor';
// import { showSweetAlert } from '@/Store/utils/sweetalert';
// import {hashData} from '../../globalFunction/hashData';
// import {generateSecureImagePath} from '../../globalFunction/secureImagePath';
// //import FullImageModal from './image_modal.vue'
import axios from 'axios';

export default{ 
    components:{
        FlowerSpinner,
    },
    computed:{
        ...mapGetters(['isLoading', 'showCart'])
    },                                                      
    data(){
        return {
            products: []
        }
    },
    async mounted() {
        await this.fetchProducts();
        this.hideLoader();
    },
    methods:{
        ...mapMutations(['display_cart']),
        ...mapActions(['showLoader', 'hideLoader', 'addCart']),
        closeCart(){
            this.display_cart(false)
            console.log('overlay')
        },
        async pushToState(item){
            this.showLoader();
            await this.$store.dispatch('addCart', item )
            //this.$router.push({name: 'product-detail', params: { id: item.id }})
        },
        addToCart(item){
            this.$store.dispatch('addCart', (item))
            this.display_cart(true)
        },
        async fetchProducts(){
            try {
                this.showLoader();
                const response = await axios.get(`https://fakestoreapi.com/products`)
                this.products = response.data;
                console.log(this.products)
            } catch (err) {
                console.error(err);
             }
        }
    }
}
</script>
<style scoped> 
.modal-active{
    pointer-events: none;
}
.preview-image {
    max-width: 100%;
    height: auto;
}

.spinner{
  position: absolute;
  background-color: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
  width: 100%;
}
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    gap: 10px;
    box-sizing: border-box;
    max-width: 1200px;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    margin: 10px 0;
    max-width: 300px;
    height: auto;
    max-height: 500px;
    padding: 40px 20px;
    margin: 10px 20px;
    flex-grow: 1;
}

.img-container {
    position: relative;
    width: 100%;
    padding-bottom: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
}

img {
    position: absolute;
    width: 100%;
    max-width: 300px;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    cursor: pointer;
}

.icon-div {
    text-align: center;
}

.card-description{
    height: 50px;
}

@media(max-width:768px) {
    .card {
        /* flex: 0 0 calc(50% - 10px); */
        margin: 20px;
    }
}

.card:hover, .card-image {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
}

.card-text {
    width: 100%;
    overflow: hidden;
}

.portfolio-section{
    background-color: #5C8374;
}

</style>
