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
    <div v-else class="product-div" >
      <div v-if="!cartItems.length" class="text-2xl font-bold text-center my-20">Please select product first</div>
      <div v-else 
            class="rounded-xl shadow-2xl border-box mx-20 my-10 sm:p-4">
            <h3 class="text-base sm:text-xl font-semibold">
                Sample Cart func.
            </h3>
            <div
                v-for="item of uniqueCartItems"
                :key="item.id"
                >
                <div class="flex flex-col flex-wrap justify-between my-2 px-2 h-30">
                    <div class="col-12  flex justify-between h-auto">
                        <div class="col-sm-6">{{ item.title  }}</div>
                        <div class="col-sm-6">
                            <button 
                                @click="removeItem(item)"
                                class="h-8 w-8 bg-red-500 m-0 py-0 px-1 text-white rounded-full flex items-center justify-center content-center"
                                > 
                                x 
                            </button>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between box-border items-center mb-1">
                        <div class="py-2">
                            <button @click="reduceQTY(item)">
                                <span class="px-1 rounded-md outline outline-sky-500">-</span>
                            </button>
                            <span class="mx-2">{{ itemQuantity[item.id] }}</span>
                            <button @click="increaseQTY(item)">
                                <span class="px-1 rounded-md outline outline-sky-500">+</span>
                            </button>
                        </div>
                        <div>
                            <span class="font-bold">{{ item.price * item.quantity }}</span>
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
  

        <div class="form-div">
            <form @submit.prevent="sendOrderEmail">
                <div class="form-group">
                    <input
                        name="name"
                        type="text"
                        id="name"
                        class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your name"
                        v-model="form.name"
                    />
                </div>

                <div class="form-group">
                    <input
                        name="company"
                        type="text"
                        id="company"
                        class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your company"
                        v-model="form.company"
                    />
                </div>
    
                <div class="form-group">
                    <input
                        name="email" 
                        type="text"
                        id="form-email"
                        class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your email"
                        v-model="form.email"
                    />
                </div>

                <div class="form-group">
                    <textarea
                        name="textarea" 
                        type="text"
                        id="textarea"
                        class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Enter your Address"
                        v-model="form.address">
                        </textarea>
                </div>
                <button 
                    type="submit"
                    class="btn bg-black text-white px-4 rounded-xl">Confirm Order
                </button>
            </form>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
//import { showSweetAlert } from '../../Store/utils/sweetalert.js';
import { showSweetAlert } from '../../Store/utils/sweetalert'
import axios from 'axios';
import { FlowerSpinner } from 'epic-spinners'

export default {
    emits: ['close'],
    components: {
        FlowerSpinner
    },
    computed:{
        ...mapGetters(['cartItems','isLoading']),
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

            console.log(quantityMap, 'qantitymap')
            return quantityMap;
        },
    },
    data(){
        return {
            form: {
                name:'',
                email:'',
                company:'',
                address: '',
            },
        }
    },
    async mounted() {
        await this.showLoader();
        this.hideLoader();
    },
    // },
    methods:{
        ...mapActions(['showLoader', 'hideLoader','removeCart', 'increaseCartItem', 'decreaseCartItem', 'addCart']),
        async sendOrderEmail(){
            try {  
                const { name, email, company, address } = this.form

                console.log(this.form, 'this form')
                // //localhost
                // await axios.post('http://localhost:3000/send-email' , {
                //  // firebase url
                 await axios.post('https://us-central1-ballthatthana-app.cloudfunctions.net/sendOrderEmail', {
                    name,
                    email,
                    company, 
                    address,
                    items: this.cartItems
                })
   
                // if (response.ok) {
                this.loading = true;
                showSweetAlert('success', 'Email sent successfully', false, 1500);
                setTimeout(() => {
                    this.loading = false;
                    this.form = {
                        name:'',
                        email:'',
                        company: '',
                        address: '',
                    };
                    this.$store.dispatch('clearCart', [])
                    window.location.reload();
                }, 3000);
                console.log(this.form)
            } catch (err) {
                showSweetAlert('error', 'An error occurred', false, 1500);
                this.loading = false;
            }
        },
        checkout(items){
            this.$store.commit('setProducts', items)
            console.log(items, 'checkout items')
            this.$router.push({name: 'checkout'})
        },
        reduceQTY(item) {
            this.decreaseCartItem(item);
        },
        increaseQTY(item) {
            this.increaseCartItem(item);
        },
        closeCart(){
            this.$emit('close');
        },
        removeItem(item){
            this.removeCart(item)
        }
    }
}
</script>
<style>
.form-div, .product-div {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
}
</style>