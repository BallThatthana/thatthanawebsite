<template>
    <div class="overlay" @click="closeCart"></div>
    <div class="cart-modal">
        <!-- <div class="modal-overlay" @click="closeCart"></div> -->
        <div class="modal-container rounded-xl shadow-2xl border-box px-20 py-10 sm:p-4">
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
            <div class="flex justify-end py-4">
                <button 
                    @click="checkout(cartItems)"
                    class="btn bg-black text-white px-4 rounded-xl">Checkout</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
//import { showSweetAlert } from '../../Store/utils/sweetalert.js';

export default {
    emits: ['close'],
    computed:{
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
            // console.log(quantityMap, 'qantitymap')
            return quantityMap;
        },
    },
    data(){
        return {
          
        }
    },
    // },
    methods:{
        ...mapActions(['removeCart', 'increaseCartItem', 'decreaseCartItem', 'addCart']),
        ...mapMutations(['display_cart']),
        checkout(items){
            this.$store.commit('setProducts', items)
            console.log(items, 'checkout items')
            this.display_cart(false)
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
<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  z-index: 9998;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0);
  z-index: 9998;
}
.modal-container {
  position: fixed;
  z-index: 99999;
  background-color: white;
  padding-top: 10px;
  right: 10px;
  max-height: 80%;
  width: 100%;
  max-width: 400px;
  overflow-y: auto;
  padding: 10px;
}

@media (max-width: 576px) {
    .modal-container{
        margin: auto;
        max-width: calc(100% - 20px);
        left: 0;
        right: 0;
    }
}
</style>