<template>
    <div>
        <div v-if="showLogin" class="border rounded-xl shadow-xl mt-10 pt-8 p-6 w-2/3 md:w-1/3 m-auto">
            <h3 class="text-base sm:text-xl font-semibold"> Please 
                <span v-text="!type ? 'sign in':'sign up'"></span>
                to see my personal information.
            </h3>

            <div class="signin_container p_top mt-4 py-4 px-2 m-auto">
                <form @submit.prevent="onSubmit">


                    <div class="form-group">
                            <input
                                name="email" 
                                type="text"
                                id="email"
                                class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your email"
                                v-model="values.email"
                            />
                    </div>


                    <div class="form-group">
                            <input
                                name="password"
                                type="password"
                                id="password"
                                class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your password"
                                v-model="values.password"
                            />
                    </div>

                    <button
                        type="submit"
                        class="btn mb-3 btn-block mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        v-text="!type ? 'Sign in':'Sign up'"
                    >
                    </button>

                    <hr/>
                    <div class="form_swap"> Click to 
                        <span @click="type = !type">
                            <span v-if="type">
                                <b>Sign in</b>
                            </span>
                            <span v-else>
                                <b>Sign up</b>
                            </span>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { showSweetAlert } from '../../Store/utils/sweetalert.js';

export default {
    computed:{
        ...mapGetters(['isAuth']),
        showLogin(){
            return !this.isAuth;
        }
    },
    data(){
        return {
            type:false,
            signInAndSignUpComplete: false,
            values: {
                email:'',
                password:'',
            }
        }
    },
    // watch: {
    //     signInAndSignUpComplete(value){
    //         if(value && !this.type){
    //             showSweetAlert('success', 'เข้าสู่ระบบสำเร็จ', false, 1500);
    //         } else if(value && this.type){
    //             showSweetAlert('success', 'ลงทะเบียนสำเร็จ', false, 1500);
    //         } else if(!value){
    //             showSweetAlert('success', 'ออกจากระบบสำเร็จ', false, 1500);
    //         }
    //     }
    // },
    methods:{
        ...mapActions(['signin', 'signup', 'signOut']),
        
        async onSubmit(){
           try {
                if(!this.type){
                    // sign in
                    await this.$store.dispatch('signin', this.values);
                } else {
                    //sign up
                await this.$store.dispatch('signup', this.values);
                }

           } catch(err){
                if (
                    err.response && 
                    err.response.data && 
                    err.response.data.error.message === 'INVALID_PASSWORD'
                    ) {
                    showSweetAlert('error', 'รหัสไม่ถูกต้อง', false, 1500)
                } else {
                    showSweetAlert('error', err , false, 1500)
                }

           }
        },
        onLogOut(){
            this.$store.dispatch('signOut')
            //this.signInAndSignUpComplete = false;
        }
    }
}
</script>