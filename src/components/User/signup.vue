<template>
    <div class="my-10">
        <!-- <div @click="onCloseModal" class="modal-overlay"></div> -->
        <!-- <div class="modal-container border rounded-xl bg-white shadow-xl mt-10 pt-8 p-6 w-2/3 m-auto"> -->

        <!-- <div class="modal-overlay" @click="onCloseModal"></div>
        <div class="modal-container border rounded-xl bg-white shadow-xl mt-10 pt-8 p-6 w-2/3 m-auto"> -->
           <div>
            <h3 class="text-base sm:text-xl font-semibold">
               {{ variableTitle() }}
            </h3>
            <p class="text-center mb-4">(using Firebase Authentication)</p>
           </div>
            <div class="signin_container p_top mt-4 py-4 px-2 m-auto">
                <form @submit.prevent="onSubmit">
                    <div class="form-group">
                        <input
                            name="email" 
                            type="text"
                            id="signin-email"
                            class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your email"
                            v-model="form.email"
                            required
                            />
                    </div>

                    <div class="form-group">
                        <input
                            name="password"
                            type="password"
                            id="password"
                            class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your password"
                            v-model="form.password"
                            required
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
    <!-- </div> -->
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { showSweetAlert } from '../../Store/utils/sweetalert.js';

export default {
    emits: ['close'],
    computed:{
        ...mapGetters(['isAuth', 'toggleShowLogin']),
    },
    data(){
        return {
            type: false,
            signInAndSignUpComplete: false,
            form: {
                email:'',
                password:'',
            },
        }
    },
    // },
    methods:{
        ...mapActions(['signin', 'signup', 'logOut', 'changeLoginState', 'closeLoginModal']),
        variableTitle(){
            let type = this.type
            const currentURL = window.location.href;
            const isLoginPage = currentURL.endsWith('/login')
            if(!isLoginPage){
                if(!type){
                    return `Please sign-in to download my CV`
                } else{
                    return `Please sign-up to download my CV`
                }
            } else if(isLoginPage){
                if(!type){
                    return `Please sign-in to continue`
                } else {
                    return `Please sign-up to continue`
                }
            }
        },
        onCloseModal() {
            // this.$store.commit('closeLogin')
            this.$emit('close')
        },
        async onSubmit(){
           try {
                if(!this.type){
                    // sign in
                    await this.$store.dispatch('signin', this.form );
                    this.onCloseModal();
                    if (this.$store.getters.isAuth) {
                        const redirectFrom = this.$route.query.redirectFrom || '/';
                        this.$router.push(redirectFrom);
                    }
                } else {
                    //sign up
                    await this.$store.dispatch('signup', this.form );
                    this.onCloseModal();
                    if (this.$store.getters.isAuth) {
                        const redirectFrom = this.$route.query.redirectFrom || '/';
                        this.$router.push(redirectFrom);
                    }
                    //this.$router.push(this.$route.query.redirectFrom || '/')
                }
           } catch(err){
                if (
                    err.response && 
                    err.response.data && 
                    err.response.data.error.message === 'INVALID_PASSWORD'
                    ) {
                    showSweetAlert('error', 'wrong password', false, 1500)
                } else {
                    showSweetAlert('error', err , false, 1500)
                }

           }
        },
        onLogOut(){
            this.$store.dispatch('logOut')
            this.$store.commit('closeLogin')
            //this.signInAndSignUpComplete = false;
        }
    }
}
</script>
<style scoped>

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  /* Your existing modal styles */
}
</style>