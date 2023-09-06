<template>
    <!-- <div v-if="isAuth" class="text-center text-xs pb-2">
        <span>You are signed In </span>
        <button 
            @click="onLogOut"
            class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg sm:w-auto px-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >Logout
        </button>
    </div> -->
    <header class="h-18">
        <nav id="navbar" class="flex justify-between place-items-center" :class="{ scrolled: isScrolled }">
            <span class="pl-5 font-semibold text-white"><a href="/">Ball Thatthana</a></span>
            <ul>
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
            </ul>
        </nav>
    </header>
</template> 
<script>
import { mapActions, mapGetters } from 'vuex'
//import Home from './home.vue'

export default {
    components: {
        //Home,
    },
    computed: {
        ...mapGetters(['isAuth']),
        ...mapActions(['signOut'])
    },
    data(){
        return{
        isScrolled: false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount(){
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods:{
        handleScroll(){ 
            this.isScrolled = window.scrollY> 0;
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
    top: 0;
    background-color: rgba(0,0,0,0.8);
    transform: scale(1.02); 
    transition: height 0.5s ease-in-out;
    transition-duration: 0.5s;
}

header{
    background-color:black;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

nav {
    top: 0;
    position: fixed;
    background-color:black;
    width: 100%;
    z-index: 9999;
    transition: transform 0.2s ease-in-out;
    padding: 0 10px;
}
nav ul{
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
}

</style>