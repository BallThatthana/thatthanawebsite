<template>
     <Topbar/>
     <Banner/>
     <Portfolio/>
 </template>
 
 <script>
 import { mapGetters } from 'vuex';
 import Topbar from './topbar.vue'
 import Banner from './banner.vue'
 import Portfolio from './portfolio.vue'
 
 export default {
     components:{
         Topbar,
         Banner,
         Portfolio
     },
     computed:{
         ...mapGetters(['isAuth']),
         showLogin(){
             return !this.isAuth;
         }
     }
 }
 </script>
 