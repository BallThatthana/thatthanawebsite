<template>
    <Topbar/>
    <div v-if="!loading"
        class="border rounded-xl shadow-xl mt-20 pt-8 p-6 w-2/3 sm:w-1/2 lg:w-1/3 m-auto">
        <h3 class="text-base sm:text-xl font-semibold"> Any questions, please fill following form to contact me.
        </h3>

        <div class="signin_container p_top mt-4 py-4 px-2 m-auto">
            <form @submit.prevent="sendEmail">

                <div class="form-group">
                        <input
                            name="name"
                            type="text"
                            id="name"
                            class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name"
                            v-model="form.name"
                        />
                </div>

                <div class="form-group">
                        <input
                            name="company"
                            type="text"
                            id="company"
                            class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your company"
                            v-model="form.company"
                        />
                </div>
    
                <div class="form-group">
                        <input
                            name="email" 
                            type="text"
                            id="email"
                            class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your email"
                            v-model="form.email"
                        />
                </div>

                <div class="form-group">
                        <textarea
                            name="textarea" 
                            type="text"
                            id="textarea"
                            class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your email"
                            v-model="form.message">
                         </textarea>
                </div>

                <button
                    type="submit"
                    class="btn mb-3 btn-block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                > Send message
                </button>
                <hr/>
            </form>
        </div>
    </div>
    <div v-else>
        <div class="flex justify-center items-center min-h-screen">
            <flower-spinner
                :animation-duration="2500"
                :size="70"
                color="#ff1d5e"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Topbar from './topbar.vue'
import { showSweetAlert } from '../../Store/utils/sweetalert'
import axios from 'axios';
import { FlowerSpinner } from 'epic-spinners'

export default {
    components: {
        Topbar,
        FlowerSpinner
    },
    computed:{
        ...mapGetters(['isAuth']),
        showLogin(){
            return !this.isAuth;
        },
    },
    data(){
        return {
            loading:false,
            form: {
                name:'',
                email:'',
                company:'',
                message: ''
            }
        }
    },
    methods:{
       async sendEmail(){
            try {  
                const { name, email, message } = this.form
                await axios.post('http://localhost:3000/api/send-email', {
                    name,
                    email,
                    text: message
                })
                this.loading = true;
                showSweetAlert('success', 'ส่งอีเมลเรียบร้อย', false, 1500)

                setTimeout(()=>{
                    this.loading = false;
                    this.$router.push('/')
                },3000);

            } catch(err){
                showSweetAlert('error', 'มีข้อผิดพลาด', false, 1500)
                this.loading = false;
           }
        }
    }
}

</script>