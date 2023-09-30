<template>
 <div>
    <div v-if="isAuth" class="container-fluid btn-container">
        <a  class="btn-cv bg-blue-500 hover:bg-blue-400" 
            href="https://drive.google.com/file/d/1bskBU7wBVwByDEI1zywp9XR9iyIO64IF/view?usp=sharing" 
            target="_blank">
            Download my CV
        </a>
    </div>
    <div v-else class="container-fluid btn-container">
        <p class="text-2xl sm:text-3xl md:text-4xl font-bold">Signup to download my CV</p>
    </div>
 </div>
</template>
<script>
import { mapGetters} from 'vuex';
export default {
    computed:{
        ...mapGetters(['isAuth']),
        showLogin(){
            return !this.isAuth;
        }
    }
}

</script>
<style scoped>
.btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    text-align: center;
    margin: 80px 0;
    padding: 20px;
}
.btn-cv {
    color: white;
    width: 500px;
    height: auto;
    /* background-color: #71A6FF; */
    padding: 20px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: 500;
    box-shadow: 1px 2px 10px 1px gray;
    transition: transform 0.3s;
}

.btn-cv:hover {
    transform: scale(1.1);
}
</style> 