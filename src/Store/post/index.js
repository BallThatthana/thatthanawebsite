import { collection, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';

let postCollection = collection(db,"posts")

const PostModule = {
    state(){ 

    },
    mutations:{
        setFood(state,payload){
            state.food = payload
        },
        setUserId(state, value) {
            state.userId = value
        },
    },
    actions:{
        async postFood({ commit, rootGetters }, payload) {
            try {
                const user = rootGetters['getUserData']
                const newArticle = doc(postCollection)
                await setDoc(newArticle,{
                    timestamp: serverTimestamp(),
                    owner: {
                        uid: user.uid
                    },
                    ...payload
                })
                 console.log(payload, 'Post added successfully');
                    // reset the food input field
                    this.food = '';
                        // update the food state in Vuex
                    commit('setFood', payload );

            } catch(error){
                console.error('Error adding post: ', error);
            }
        },
    }
}

export default PostModule;