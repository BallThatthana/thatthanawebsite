<template>
    <div>
        <div v-if="toggleShowLogin && !isAuth">
        <div @close="closeModal" class="modal-overlay"></div>
        <SignUp @close="closeModal"/>
        </div>
        <div v-else></div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import SignUp from '../User/signup.vue'
//import store from '../../Store'

export default{
    components: {
        SignUp
    },
    computed:{
    ...mapGetters(['isAuth', 'toggleShowLogin'])
    },
    // beforeRouteEnter(to, from, next){
    //     if(store.getters['isAuth']){
    //         next()
    //     } else {
    //         next()
    //     }
    // },
    beforeMount(){
        this.$store.commit('handleLogin');
    },
    methods:{
        closeModal(){
            this.$store.commit('handleLogin');
        },
    }

}
</script>