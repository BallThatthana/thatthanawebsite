/* eslint-disable */
import { onAuthStateChanged, createUserWithEmailAndPassword, setPersistence, signInWithEmailAndPassword, signOut, browserLocalPersistence } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db, auth} from '../../firebase';
import { showSweetAlert } from '../utils/sweetalert';
import router from '@/routes';
//import { FlowerSpinner } from 'epic-spinners';
// import axios from 'axios';
// import { CirclesToRhombusesSpinner } from 'epic-spinners';

const DEFAULT_USER = {
  uid: null,
  email: null,
  firstname: null,
  lastname: null,
  isAdmin: null,
  refresh: null,
  token: null,
};

const authModule = {
  state() {
    return {
      user: {...DEFAULT_USER},
      auth: false,
      loginForm: false,
    };
  },
  getters: {
    getUserData: state => state.user,
    isAuth: state => state.user.email ? true : false,
    toggleShowLogin: state => state.loginForm
  },
  mutations: {
    setUser(state, payload) {
        console.log("setUser called:", payload);
      state.user = {
        ...DEFAULT_USER,
        ...payload
      };
      state.auth = true;
    },
    clearUser(state) {
      state.user = {...DEFAULT_USER};
      state.auth = false;
    },
    handleLogin(state){
      state.loginForm = !state.loginForm;
    },
    closeLogin(state){
      state.loginForm = false;
    },
    setRefresh(state, payload){
      state.user.refresh = payload.refreshToken
    },
    setToken(state, payload){
      state.user.token = payload.idToken
    }
  },
  actions: {
    setToken({commit}, payload){
      localStorage.setItem('refresh', payload.refreshToken);
      localStorage.setItem('token', payload.idToken);
      //commit('setRefresh', payload)
      //commit('setToken',payload)
    },
    removeToken(){
      localStorage.removeItem('refresh');
      localStorage.removeItem('token');
      // commit('setRefresh')
      // commit('setToken')
    },
    async checkAuthStatus({ commit, dispatch }) {
      // Use onAuthStateChanged to listen for authentication state changes
      return new Promise((resolve)=>{

        onAuthStateChanged(auth, async (user)=>{

          if(user){
            commit('setUser', user);
          } else {
            commit('clearUser');
          }
          resolve();
        })
      })
    },
    async logOut({ commit, dispatch }) {
      try {
        await signOut(auth);
        await commit('clearUser');
        await dispatch('removeToken');
        showSweetAlert('success', 'Logout successful', false, 2000);
        setTimeout(()=>{
          router.push('/')
        },1000)
      } catch (error) {
        showSweetAlert('error', error, 1500, false);
      }
    },
    // async autoLogin({ commit, dispatch }, payload) {
    //   try {
    //     const userData = await dispatch('getUserProfile',payload.uid);
    //     commit('setUser', userData);
    //     return true;
    //     } catch(error){
    //       console.log("no autologin");
    //     }
    //   },

    async getUserProfile(context,uid){
      try{
          console.log("UID received:", uid);
          const docSnap = await getDoc(doc(db,'users',uid));
           console.log("Document exists:", docSnap.exists());
          if(docSnap.exists()){
              return docSnap.data();
          } else {
              return null
          }
      } catch(error){
        console.log("no user profile found");
      }
    },
    async signin({ commit, dispatch }, payload) {
      try {
          await setPersistence(auth, browserLocalPersistence)
          const userCredential = await signInWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
        );
        
        const userData = await dispatch('getUserProfile',userCredential.user.uid);

        if (userData) {
          commit('setUser', userData);
        } else {
            const newUser = { 
            uid: userCredential.user.uid,
            email: userCredential.user.email,
            isAdmin: false
          };

          console.log("Creating Firestore profile...");

          await setDoc(doc(db, 'users', userCredential.user.uid), newUser);
        }

        console.log("Firestore profile created");

        commit('setUser', newUser);

        showSweetAlert('success', 'signin successful', false, 1500);
       
        } catch (error) {
            switch(error.code){
            case 'auth/wrong-password':
            showSweetAlert('error', 'wrong password', false, 1500);
            break;
            case 'auth/email-already-in-use':
            showSweetAlert('error', "Email in use", false, 1500);
            break;
            default:
            showSweetAlert('error', error.message, false, 1500);
          }
      }
    },
    async signup({ commit, dispatch }, payload) {
      try {
        await setPersistence(auth, browserLocalPersistence)
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          payload.email,
          payload.password
      );

      const newUser = {
          uid:userCredential.user.uid,
          email:userCredential.user.email,
          isAdmin:false /// warning -  cloud function
      }
        await setDoc(doc(db,'users',userCredential.user.uid),newUser);
        commit('setUser', newUser);
        
        //dispatch('setToken', userCredential.data);

        showSweetAlert('success', 'Signup successful', false, 1500);

      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          showSweetAlert('error', 'email already in use', false, 1500);
        } else {
          showSweetAlert('error', error, false, 1500);
        }
      }
    }
  }
};

export default authModule;
