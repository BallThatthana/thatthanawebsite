<template>
  <footer class="w-full bg-black py-8 border-t border-white/10 transition-all duration-300">
    <div id="footer-content" class="max-w-5xl w-full mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
      
      <div class="text-[11px] sm:text-xs font-mono text-white/40 tracking-wide uppercase">
        <a href="/" class="hover:text-white transition-colors duration-300">
          Built with Vue • Tailwind • Firebase
        </a>
      </div>

      <div class="text-[11px] sm:text-xs font-mono text-white/30 tracking-wide uppercase">
        &copy; 2026 Bon Thatthana. All rights reserved.
      </div>

    </div>
  </footer>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
//import Home from './home.vue'

export default {
    // components: {
    //     Home,
    // },
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

#footer {
    bottom: 0;
    background-color:black;
    padding: 20px 0;
    width: 100%;
    z-index: 9999;
    transition: transform 0.2s ease-in-out;
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