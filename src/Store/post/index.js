/* eslint-disable */ 

import { collection, serverTimestamp, doc, setDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { showSweetAlert } from '../utils/sweetalert';
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";

const storage = getStorage();

let postCollection = collection(db,"posts")

const PostModule = {
    state(){ 
      return {
        post:'',
        userId:'',
        posts: []
      }
    },
    getters :{
        foodData: state => state.post,
        userId: state => state.userId,
        allPosts(state){
            return state.posts
        }
    },
    mutations:{
        // setFood(state,payload){
        //     state.post = payload
        // },
        setUserId(state, value) {
            state.userId = value
        },
        setPost(state, payload){
            state.posts = payload
        }
    },
    actions:{
        // async upLoadImageAndGetUrl({context, rootState },fileName) {
        //     try {
        //         const uid = rootState.auth.user.uid
        //         console.log(uid, "getters uid")
        //         console.log(fileName, "vuex FIlename")
        //         const storageRef = ref(storage, 'users/' + uid + '/images/' + fileName);
        //         await uploadBytes(storageRef, fileName);
        //         const downloadUrl = await getDownloadURL(storageRef);
        //         return downloadUrl;
        //     } catch(err){
        //         console.log(err);
        //         return null;
        //     }
        // },
        async getPosts({commit}){
             try {
               const data = await getDocs(postCollection)
               const posts = []
               data.forEach((post)=>{
                posts.push({...post.data()})
               })
               //console.log(posts, 'Allposts')
               commit('setPost', posts)
             } catch(err){
                console.log(err)
             }
        },
        async postData({ commit, rootGetters }, payload) {
            try {
                //get UserData
                const userData = rootGetters['getUserData'];
                //console.log(userData,  'user Data')
                const collection = doc(postCollection)
                const postPayload = {
                    timestamp: serverTimestamp(),
                    owner:{
                        email: userData.email,
                    },
                    post_detail: {
                        ...payload,
                    },
                    time: new Date().getTime(),
                    uid: userData.uid,
                }
                await setDoc(collection, postPayload)

                //console.log(postPayload, "Post data")
                commit('setPost', payload);
                showSweetAlert('success', 'Post Successful', false, 1500)
                window.location.reload();
                commit('showLoader');
            } catch(err){
                console.log(err)
                showSweetAlert('error', err, false, 1500)
            }
        },
    }
}

export default PostModule;