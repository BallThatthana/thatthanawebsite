<template>
    <div>
       <Banner/>
       <Social/>
       <CV/>
       <Portfolio/>
       <Contact_Form/>
       <Footer></Footer>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Banner from './banner.vue'
import Portfolio from './portfolio.vue'
import Social from './social-icon.vue'
import Contact_Form from './contact.vue'
import CV from './cv.vue'
import Footer from './footer.vue'

export default {
    components:{
        Banner,
        Portfolio,
        Social,
        Contact_Form,
        CV,
        Footer,
    },
    computed:{
       ...mapGetters(['loader', 'isAuth', 'getUserData']),
        showLogin(){
            return !this.isAuth;
        },
       isAuth(){
           return this.$store.getters.isAuth
       }
   },
   data(){
       return {
       
       }
   },
}
</script>
