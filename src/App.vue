<template>
  <div>
    <div v-if="isLoading"
      class="spinner flex justify-center items-center min-h-screen">
        <flowerSpinner/>
    </div>
    <div v-else >
      <top-bar></top-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import { FlowerSpinner } from 'epic-spinners'
import { mapActions, mapGetters } from 'vuex'
import TopBar from './components/FrontPage/topbar.vue'
import { showSweetAlert } from './Store/utils/sweetalert.js';
//import Footer from './components/FrontPage/footer.vue'
import flowerSpinner from './components/Utils/flowerSpinner.vue';

export default {
name: 'App',
components:{
  flowerSpinner,
  TopBar,
  //Footer
},
methods: {
  ...mapActions(['showLoader', 'hideLoader']),
},
computed:{
  ...mapGetters(['isLoading', 'isAuth', 'getUserData']),
  // isLoading(){
  //   return this.$store.getters.isLoading
  // },
  // isAuth(){
  //   return this.$store.getters.isAuth
  // },
  // getUserData(){
  //   return this.$store.getters.getUserData
  // },
  }
  ,
  async mounted(){
    this.showLoader();
    try {
      await this.$store.dispatch('checkAuthStatus', this.getUserData );
      
    } catch(err){
      showSweetAlert("error", err , false, 1500)
    } finally {
      this.hideLoader();
    }
  },
}
</script>

<style>
.spinner{
position: fixed;
background-color: rgba(0, 0, 0, 0.322);
width: 100%;
height: 100vh;
top: 0;
left: 0;
z-index: 9999;
}
</style>