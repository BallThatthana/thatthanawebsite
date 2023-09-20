<template>
    <!-- <div v-if="isAuth" class="text-center text-xs pb-2">
        <span>You are signed In </span>
        <button 
            @click="onLogOut"
            class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:w-auto px-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Logout
        </button>
    </div> -->
    <div class ="header" :class="{ scrolled: isScrolled }">
        <nav id="navbar">
            <div class="font-semibold text-white text-base sm:text-xl"><a href="/">Ball Thatthana Portfolio</a></div>
            <div>
                <span v-if="!clickSignUp && !isAuth" 
                @click="clickToSignUp"
                 class="font-semibold text-white text-base sm:text-xl">Sign Up
                </span>
                <div v-if="clickSignUp">
                    <div class="fixed inset-0 flex items-center justify-center-index-9999">
                        <SignupModal @close="closeModal"/>
                    </div>
                </div>
                <span v-if="!clickSignUp && isAuth" 
                    @click="onLogOut"
                    class="font-semibold text-white text-base sm:text-xl">Logout
                </span>
            </div>
            <!-- <ul>
                <li>
                    <router-link class="nav-link transition duration-500 ease-in-out hover:text-white hover:bg-black" :to="{name: 'home'}">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link class="nav-link" :to="{name: 'contact'}"> 
                       Contact
                   </router-link>
                </li>
            </ul> -->
        </nav>
    </div>
</template> 
<script>
import { mapActions, mapGetters } from 'vuex'
import SignupModal from '../User/signup.vue'
//import Home from './home.vue'

export default {
    components: {
        SignupModal
    },
    computed: {
        ...mapGetters(['isAuth']),
        ...mapActions(['signOut'])
    },
    data(){
        return{
        isScrolled: false,
        clickSignUp: false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
        closeModal(){
            this.clickSignUp = false;
        },
        clickToSignUp(){
            this.clickSignUp = !this.clickSignUp
        },
        handleScroll(){ 
            this.isScrolled = window.scrollY > 0;
        },
        onLogOut(){
            this.$store.dispatch('signOut')
            //this.signInAndSignUpComplete = false;
        }
    }
}
</script>
<style scoped>

.scrolled {
    background-color: rgba(0, 0, 0, 0.705);
    transition: height 2s ease-in-out;
    padding: 20px;
    justify-content: space-around;
    position: fixed;
}

.header{
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
    width: 100%;
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