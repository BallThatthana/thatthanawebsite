<template>
    <div v-if="isLoading"
        class="spinner flex justify-center items-center min-h-screen">
            <flower-spinner
                :animation-duration="2500"
                :size="70"
                color="#ff1d5e"
            />
    </div>
    <div id="main-container" class="container-fluid m-auto">
        <h2 class="text-center">Sample Post Page</h2>
        <h4 class="text-center m-auto">(Must signin first to post)</h4>
        <div class="p-20 lg:w-2/3 m-auto shadow-xl shadow-grey p-6">
            <h3>Post Preview</h3>
            <div class="h-60 border-4 border-black-800 rounded-2xl my-6 m-auto flex content-center">
                <img v-if="imagePreview" :src="imagePreview" alt="Image Preview" class="preview-image">
                <p v-else class="font-bold text-center m-auto">Image Preview</p>
            </div>
            <p class="text-black font-semibold">Title: {{ form && form.title }}</p>
            <p class="text-black">Description: {{ form && form.description }}</p>
        </div>
        <div class="my-10 p-20 lg:w-2/3 m-auto shadow-xl shadow-grey p-6">
            <form @submit.prevent="submitPost">
                <label for="title">Type in title</label>
                <input 
                    name="title"
                    type="text" 
                    v-model="form.title" 
                    class="form-control mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                <label for="descripton">Type in description</label>
                <textarea
                    name="descripton"
                    type="text" 
                    v-model="form.description" 
                    class="form-control mt-2 h-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                </textarea> 
                <input 
                    ref="imageInput"
                    name="image"
                    type="file" 
                    accept="image/*"
                    @change="imageUpload"
                    class="my-4"
                >
                <div>
                    <button 
                        type="submit"
                        class="mt-2 outline focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:focus:ring-blue-800"
                        >Submit
                     </button>
                </div>
            </form>
        </div>
        <div class="container mt-4">
            <h3>Post fetched from Firebase Firestore</h3>
        </div>
        <div class="container">
            <div class="card"
                    v-for="post in posts" 
                    :key="post.id">
                <div @click="displayModal(post)" >
                    <img class="card-img" :src="post.post_detail.image_url" />
                </div>
                <div class="card-text overflow-hidden">
                    <h5 class="card-title font-bold">{{ post.post_detail.title }}</h5>
                    <p class="card-description">{{ post.post_detail.description }}</p>
                    <p class="card-description">{{ post.owner.email }}</p>

                </div>
                <!-- <full-image-modal
                    v-if="fullImage"
                    :image-url="fullScreenImageUrl"
                    @close="closeFullScreenImage"
                /> -->
                <div class="mt-4">
                    <router-link to="/posts/1">
                        <button type="button" class="btn outline mb-4 rounded-xl font-semibold px-2 py-1 mt-1 w-full"
                            >
                            View
                        </button>
                    </router-link>
                    <!-- <button 
                            @click="addToCart(post)"
                            type="button" 
                            class="btn bg-black rounded-xl text-white font-semibold px-2 py-1 mt-1 w-full">
                            Add to cart
                        </button> -->
                    <button type="button" 
                        @click="deletePost(post.id)" 
                        class="btn outline rounded-xl font-semibold px-2 py-1 mt-1 w-full"
                    >Delete
                </button>
                </div>
            </div>
        </div>
    </div>
    <div v-if="showModal">
        <full-image-modal
            :image-url="modalImageUrl"
            :postTitle="modalPostTitle"
            :postDescription="modalPostDescription"
            :postAuthor="modalAuthor"
            :postDate="modalDate"
            @close="closeFullScreenImage"
        />
    </div>>
</template>
<script>

import { mapActions, mapGetters, mapMutations} from 'vuex';
import { FlowerSpinner } from 'epic-spinners';
import { getStorage, ref, uploadBytes,getDownloadURL  } from "firebase/storage";
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
//import axios from 'axios';
//import { ImageCompressor } from 'image-compressor';
import { showSweetAlert } from '@/Store/utils/sweetalert';
import {hashData} from '../../globalFunction/hashData';
import {generateSecureImagePath} from '../../globalFunction/secureImagePath';
import FullImageModal from './image_modal.vue'

export default{ 
    components:{
        FlowerSpinner,
        FullImageModal
    },
    computed:{
        ...mapGetters(['isAuth', 'toggleShowLogin','getUserData', 'allPosts', 'closeLogin', 'loader']),
        ...mapMutations(['setUser']),
        isLoading(){
            return this.$store.getters.loader
        }
    },                                                      
    data(){
        return {
            form:{
                title:'',
                description:''
            },
            imagePath:[],
            imagePreview: null,
            posts:[],
            file: null,
            imageData: null, // Store the selected image file
            picture: null, // URL of the uploaded image
            uploadValue: 0,// Progress of the image upload,
            showModal: false,
            modalImageUrl: null,
            modalPostTitle: '',
            modalPostDescription: '',
            modalAuthor: '',
            modalDate: '',
        }
    },
    async created() {
        try {
            const postCollection = collection(db, "posts");
            const data = await getDocs(postCollection);
            this.posts = data.docs.map((doc) => {
                const postData = doc.data();
                const image = new Image();
                image.src = postData.post_detail.image_url;
                image.onload = () => {
                    this.fullScreenImageUrl = image.src;
                };
                // const secureImagePath = generateSecureImagePath(postData);
                // const hashedPath = hashData(secureImagePath);
                return {
                    id: doc.id,
                    ...postData,
                };
            });
        } catch (err) {
            console.error(err);
        }
    },
    methods:{
        ...mapActions(['postData', 'showLoader', 'hideLoader', 'addCart']),
        addToCart(item){
            this.$store.dispatch('addCart', (item))
        },
        async deletePost(id){
            try {
                await deleteDoc(doc(db, 'posts', id));
                this.posts = this.posts.filter((post) => post.id !== id);
                showSweetAlert('success', 'post deleted', false, 1500);
                // window.location.reload();
            } catch(err){
                showSweetAlert('errror', err , false, 1500);
            }
        },
        formatDate(time){
            const timestamp = time / 1000;
            const date = new Date(timestamp * 1000);
            const day = date.getUTCDate();
            const month = date.toLocaleString('defaul', {month: 'short'});
            const year = date.getUTCFullYear();
            return `${day}-${month}-${year}`;
        },
        displayModal(post){
            if(!this.showModal){
                this.showModal = true;
                this.modalImageUrl = post.post_detail.image_url;
                this.modalPostTitle = post.post_detail.title;
                this.modalPostDescription = post.post_detail.description;
                this.modalAuthor = post.owner.email;
                this.modalDate= this.formatDate(post.time);
                const el = document.getElementById('main-container');
                el.classList.add('modal-active');
            }
        },
        closeFullScreenImage(){
            this.showModal = false;
            this.modalImageUrl = null;
            this.modalPostTitle = '';
            this.modalPostDescription = '';
            this.modalAuthor = '';
            this.modalDate= '';
            const el = document.getElementById('main-container');
            el.classList.remove('modal-active');
        },
        getImageUrl(post){
            const secureImagePath = generateSecureImagePath(post.post_detail);
            const maskedPath = hashData(secureImagePath);
            const firebaseStoragaUrl = 'https://firebasestorage.googleapis.com/v0'
            const maskedImageUrl = `${firebaseStoragaUrl}/${maskedPath}?alt=media`;
            return maskedImageUrl
        },
        imageUpload(e){
            this.uploadValue = 0;
            this.picture=null;
            this.imageData = e.target.files[0];

            if(this.imageData){
                const reader = new FileReader();
                reader.onload = (e) =>{
                   this.imagePreview = e.target.result;
                }
                reader.readAsDataURL(this.imageData);
            } else {
                this.imagePreview = null;
            }
        },
        async onUpload() {
            this.picture = null;
            const uid = this.getUserData.uid;
            const storage = getStorage();
            const timestamp = new Date().getTime(); // Add a timestamp to make the path unique
            const fileName = `${timestamp}_${this.imageData.name}`; // Combine timestamp and original filename
            const storageRef = ref(storage, `users/${uid}/images/${fileName}`);

            try {
                // const imageCompressor = new ImageCompressor;
                // const compressSettings = {
                //     maxWidth: 800,
                //     quality: 0.5
                // }
                // const compressedFile = imageCompressor.run(this.imageData, compressSettings)
                const snapshot = await uploadBytes(storageRef, this.imageData);
                const url = await getDownloadURL(ref(storage, snapshot.metadata.fullPath));

                this.picture = url;

                snapshot.ref.on('state_changed', (snapshot) => {
                this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                });
            } catch (error) {
                showSweetAlert('error', error, false, 1500)
                console.error('Upload error:', error);
                // Handle the error here, e.g., show an error message to the user
            }
        },
        async submitPost(){
            try {

                await this.onUpload();
                         // const file = this.$refs.imageInput.files[0];
            // // if(file){
            // //     const imageUrl = await this.$store.dispatch('upLoadImageAndGetUrl', file.name);
            // //     console.log(imageUrl, 'imageUrl');
            //      // Check if 'imageUrl' is defined
                if(this.picture){
                    const post = {
                        ...this.form,
                        image_url: this.picture,
                        userId: this.getUserData.uid,
                    }
                    this.posts.push(post)
                    this.form = '';
                    await this.$store.dispatch('postData', post)
                }
            } catch(err){
                showSweetAlert('error', err, 1500, false)
            }
        }
    }
}
</script>
<style scoped> 
.modal-active{
    pointer-events: none;
}
.preview-image {
    max-width: 100%;
    height: auto;
}

.spinner{
  position: absolute;
  background-color: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
  width: 100%;
}
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    gap: 10px;
    box-sizing: border-box;
    max-width: 1200px;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    margin: 10px 0;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    max-width: 300px;
    height: 400px;
    padding: 20px;
    margin: 10px 20px;
    border-radius: 10px;
    flex-grow: 1;
}


img {
  width: 100%;
  max-width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}

.icon-div {
    text-align: center;
}

.card-description{
    height: 50px;
}

@media(max-width:768px) {
    .card {
        /* flex: 0 0 calc(50% - 10px); */
        margin: 20px;
    }
}

.card:hover, .card-image {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
}

.card-text {
    width: 100%;
    overflow: hidden;
}

.portfolio-section{
    background-color: #5C8374;
}

</style>
