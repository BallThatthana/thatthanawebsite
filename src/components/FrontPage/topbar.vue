<template>
    <div class="header" :class="{ scrolled: isScrolled }">
      <nav id="navbar">
        <div class="font-semibold text-white text-base sm:text-xl">
          <router-link :to="{ name: 'home' }">Bon Thatthana</router-link>
        </div>
        <div class="nav-right-buttons">
            <div 
                v-if="$route.path !== '/posts'"
                class="font-semibold text-white text-sm sm:text-lg px-2">
                <router-link :to="{ name: 'posts' }">Blogs</router-link>
            </div>
            <div                 
                v-if="$route.path !== '/products'"
                class="font-semibold text-white text-sm sm:text-lg px-2"
                >
                <router-link :to="{ name: 'products' }">Products</router-link>
            </div>
            <div 
                v-if="$route.path === '/'"
                class="auth-btn hide px-2">
                <!-- Render content based on the value of isAuth -->
                <div>
                    <!-- Display content for authenticated users -->
                    <div class="text-center text-xs pb-2">
                        <button 
                            v-if="isAuth"
                            @click="onLogOut"
                            class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:w-auto px-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Log out
                        </button>
                        <button
                            v-if="!isAuth"
                            @click="clickToSignUp"
                            class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:w-auto px-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            :to="{name: 'login'}"
                            >
                            My CV
                        </button>

                    </div>
                </div>
            </div>
            <div 
                v-if="$route.path === '/products'"
                    @click="displayCart">
                <i class="fas fa-shopping-bag">
                    <span class="text-white">Cart</span>
                </i>
            </div>
            <div 
                v-if="showCart"
                class="cart">
                <Cart @close="closeCart"/>
            </div>
       </div>
      </nav>
    </div>
  </template>
<script>
import { mapGetters, mapMutations} from 'vuex'
import Cart from '../Utils/cart.vue'
//import SignupModal from '../User/signup.vue'
//import Home from './home.vue'

export default {
    components: {
        Cart
        //SignupModal
    },
    computed: {
        ...mapGetters(['showCart'])
    },
    data(){
        return{
            isScrolled: false,
            loading: true, // Initialize loading flag
            // clickSignUp: false
        }
    },
    async created() {
    // Dispatch the checkAuthStatus action and wait for it to complete
        //await this.$store.dispatch('checkAuthStatus');
        this.loading = false; // Set loading flag to false when authentication state is checked
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
        ...mapMutations(['display_cart']),
        closeCart(){
            this.display_cart(false)
            console.log('overlay')
        },
        displayCart(){
            this.display_cart(true)
        },
        closeModal(){
            this.$store.commit('closeLogin');
        },
        // clickToSignUp(){
        //     this.$store.commit('handleLogin')
        // },
        clickToSignUp(){
            this.$router.push('/login')
        },
        handleScroll(){ 
            this.isScrolled = window.scrollY > 0;
        },
        onLogOut(){
            this.$store.dispatch('logOut')
            this.$store.commit('closeLogin')
        }
    }
}
</script>
<style scoped>
/* .hide {
    display: none;
} */
.nav-right-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.scrolled {
    background-color: rgba(0, 0, 0, 0.705);
    transition: height 2s ease-in-out;
    padding: 20px;
    justify-content: space-around;
    position: fixed;
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
.header{
    top: 0;
    height: 60px;
    background-color:black;
    width: 100%;
    z-index: 1;
    gap: 10px;
    padding: 20px;
    justify-content: center;
    overflow: hidden;
    margin: auto;
}

#navbar {
    max-width: 1300px;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin: auto;
}


/* nav ul{
    list-style: none;
    margin: 0;
    padding: 0;
}

nav li{
    display: inline-block;
}

nav li a {
  display: block;
  padding: 10px 20px;
  text-decoration: none;
  color: white;
  cursor: pointer;
} */

</style>