/* eslint-disable */
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { doc, setDoc, getDoc, getDocs, collection, where } from 'firebase/firestore';
import { db, auth } from '../../firebase';
import { showSweetAlert } from '../utils/sweetalert'
import router from '@/routes';

const DEFAULT_USER = {
    uid:null,
    email:null,
    firstname:null,
    lastname:null,
    isAdmin:null
}

const authModule = {
    state(){
        return {
            user: DEFAULT_USER,
            auth: false
        }   
    },
    getters:{
        getUserData: state => state.user,
        isAuth: state => state.auth,
    },
    mutations:{
        setUser(state,payload){
            state.user = {
                ...state.user,
                ...payload
            }
            state.auth = true;
        },
        clearUser(state){
            state.user = DEFAULT_USER;
            state.auth = false;
        },
        auth(state) {
            return state.auth = true;
          }
    },
    actions:{
        async signOut({commit}){
            try{
                await auth.signOut();
                commit('clearUser');
                showSweetAlert('success', 'ออกจากระบบสำเร็จ', false, 1500);
                router.push('/')
            } catch(error){
                console.log(error)
            }
        },
        async autosign({commit,dispatch},payload){
            try {
                const userData = await dispatch('auth/getUserProfile', payload.uid);
                commit('setUser', userData);
                return true;
            } catch(error){
                console.log(error)
            }
        },
        async getUserProfile({commit},payload){
            try{
                const docSnap = await getDoc(doc(db,'users',payload));

                if(docSnap.exists()){
                    return docSnap.data();
                } else {
                    return null
                }
            } catch(error){
                console.log(error)
            }
        },
        async signin({commit,dispatch},payload){

            const { email, password} = payload

            try {
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                
                const userData = await dispatch('getUserProfile',userCredential.user.uid);
                commit('setUser', userData); 
                commit('auth');
                showSweetAlert('success', 'เข้าสู่ระบบสำเร็จ', false, 1500)
                router.push('/');       
            } catch(error){
                if( error.code === 'auth/wrong-password'){
                    showSweetAlert('error', 'ใส่รหัสผิด', false, 1500)
                } else {
                    showSweetAlert('error', error, false, 1500)
                }
            }
        },
        async signup({commit},payload){
            try{
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
                    commit('setUser',newUser);
                    showSweetAlert('success', 'ลงทะเบียนสำเร็จ', false, 1500);
                } catch(error){
                if (error.code === 'auth/email-already-in-use'){
                    showSweetAlert('error', 'อีเมลนี้ใช้เเล้ว', false, 1500);
                } else {
                    showSweetAlert('error',  error , false, 1500);
                }
            }
        }
    }
}

export default authModule;