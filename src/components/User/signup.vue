<template>
    <div> 
       <div v-if="isAuth" class="col col-6 text-center">
           You are signed In
           <span>
                <button 
                @click="logout"
                class="btn-danger mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Logout
                </button>
            </span>
       </div>
       <div v-else>
           <div v-if="showSignUpForm">
               <h2>Signup</h2>
               <form @submit.prevent="signUp" class="container mx-auto max-w-xl">
                   <div class="form-group mt-2">
                       <label for="email" class="mt-2">Type in your email</label>
                       <input type="email" v-model="email" id="email" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                   </div>
                   <div class="form-group mt-2">
                       <label for="password">Type in your password</label>
                       <input type="password" v-model="password" id="password" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your password" required>
                   </div>
                   <button 
                       type="submit" 
                       class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                       >Sign up</button>
               </form>
           </div>
           <div v-else-if="showSignInForm">
               <h2>Sign In</h2>
               <form @submit.prevent="logIn" class="container mx-auto max-w-xl">
                   <div class="form-group mt-2">
                       <label for="email" class="mt-2">Please type in password to sign-in</label>
                       <input type="email" v-model="email" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                   </div>
                   <div class="form-group mt-2">
                       <label for="password">Please type the password to sign-in</label>
                       <input type="password" v-model="password" class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="your password" required>
                   </div>
                   <button
                       class="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                       >SignIn
                   </button>
               </form>
           </div>
           <div v-else class="mb-20 text-center">
               <button @click="toRegister"
                   class="mr-2 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   >Click to sign up
               </button>
               <button @click="toLogIn"
                       class="ml-2 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                   >Click to log in
               </button>
           </div>
       </div>
   </div> 
</template>

<script>
import { db, auth } from '../../firebase'
import { collection, doc, setDoc} from '@firebase/firestore';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
//import { v4 as uuidv4 } from 'uuid';
import { mapGetters } from 'vuex';

export default {
   computed:{
       ...mapGetters(['isLogIn'])
   },
   data(){
       return {
           email: '',
           password: '',
           isSignup: false,
           isSignIn: false,
           sessionToken: '',
           localStorageKey: 'myapp.sessionData',
           userId: '',
           showSignUpForm: false,
           showSignInForm: false,
           isLoggedIn: false,
           user: null
       }
   },
   created(){
       onAuthStateChanged(auth, user =>{
           if(user){
               this.isLoggedIn = true;
               this.user = user;
           } else {
               this.isLoggedIn = false;
               this.user = null;
           }
       })
   },
   methods:{
       toLogIn(){
           this.showSignInForm = true;
           this.showSignUpForm = false;
       },
       toRegister(){
           this.showSignUpForm = true;
           this.showSignInForm = false;
       },
      async signUp(){
           try {
               const userCredential = await createUserWithEmailAndPassword(
                   auth, 
                   this.email, 
                   this.password
               );
               const userId = userCredential.user.uid
               const userCollection = collection(db,'users')
               const newUserDoc = doc(userCollection, userId);
               const userData = {
                       email: userCredential.user.email,
                       password: this.password,
                       userId: userId
                   }
           await setDoc(newUserDoc, userData)
           this.isSignup = true;
           this.showSignUpForm = false;
           console.log(userData, 'SIGNED UP')

           } catch (error) {
               alert(error.message)
           }
       }, 
       async logIn(){
           this.$store.dispatch('signIn')
       }
       // async signIn() {
       //     try {
       //         await signInWithEmailAndPassword(auth, this.email, this.password);
       //         const sessionToken = uuidv4();
       //         const now = new Date().getTime();
       //         const expiresAt = now + (60 * 60 * 1000); // Expires in 1 hour
       //         this.sessionToken = sessionToken;
       //         const data = { 
       //             sessionToken: this.sessionToken,
       //             userId: this.userId,
       //             expiresAt: expiresAt
       //         };
       //         localStorage.setItem(this.localStorageKey, JSON.stringify(data));
       //         this.showSignInForm = false;
       //         console.log(this.sessionToken);
       //     } catch (error) {
       //         console.log(error);
       //     }
       },
       async logout(){
           await this.signOut();
           this.isSignIn = false;
       },
       signOut(){
           localStorage.removeItem(this.localStorageKey)
           this.isSignIn = false;
           this.userId = '';
           this.sessionToken = '';
       },
       checkSignInStatus(){
           const localStorageData = JSON.parse(localStorage.getItem(this.localStorageKey))
           if(localStorageData && localStorageData.userId && localStorageData.sessionToken && localStorageData.expiresAt > new Date().getTime()){
               this.isSignIn = true;
               this.userId = localStorageData.userId;
               this.sessionToken = localStorageData.sessionToken;
           } else {
               this.isSignIn = false;
               this.sessionToken = '';
               localStorage.removeItem(this.localStorageKey);
           }
       },
   }

</script>