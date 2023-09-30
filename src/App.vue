<template>
  <div>
    <div v-if="isLoading"
      class="spinner flex justify-center items-center min-h-screen">
          <flower-spinner
              :animation-duration="2500"
              :size="70"
              color="#ff1d5e"
          />
    </div>
    <div v-else>
      <top-bar></top-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { FlowerSpinner } from 'epic-spinners'
import { mapGetters } from 'vuex'
import TopBar from './components/FrontPage/topbar.vue'
//import Footer from './components/FrontPage/footer.vue'

export default {
name: 'App',
components:{
  FlowerSpinner,
  TopBar,
  //Footer
},
computed:{
  ...mapGetters(['loader', 'isAuth', 'getUserData']),
  isLoading(){
    return this.$store.getters.loader
  },
  isAuth(){
    return this.$store.getters.isAuth
  },
  getUserData(){
    return this.$store.getters.getUserData
  },
  data(){
    return {
  
  }
},
// beforeRouteEnter(to, from, next) {
//   next(vm => {
//     vm.checkAuthStatus().then(()=>{
//       vm.$store.dispatch('hideLoader');
//     })
//   });
},
// async created(){
//  // await this.$store.dispatch('autoLogin', this.getUserData );
//   this.$store.dispatch('hideLoader');
// },
// async beforeMount(){
//   // this.$store.dispatch('checkAuthStatus')
//   // .then(()=>{
//     this.$store.dispatch('hideLoader')
//   // })
// },
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