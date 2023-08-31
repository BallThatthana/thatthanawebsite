<template>
    <div class="sm:w-1/2 m-auto">
        <form @submit.prevent="submitFood">
            <input type="text" v-model="food" class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <button 
                type="submit"
                class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Submit</button>
        </form>
        <p class="mt-6">Your Post is {{ this.food }}</p>
    </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default{                                                                                                                                                                                                                                                                                                                                                              
    data(){
        return {
            food:''
        }
    },
    computed:{
        isAuth(){
            return this.$store.getters['auth/auth']
        },
        ...mapGetters(['auth']),
        ...mapGetters(['user', 'auth']),
        ...mapMutations(['setUser'])
    },
    methods:{
        ...mapActions(['postFood']),
        submitFood(){
            const post = {
                food: this.food,
                userId: this.user,
                timestamp: new Date().getTime()
            }
            this.postFood(post)
            this.food = '';
        }
    },
}
</script>
<style scoped> 
</style>
