<template>
    <div class="container sm:mx-10 p-4">
        <h1>Test Api page</h1>
        <div v-for="post in posts" :key="post.id">
            <div class="my-6 p-10 bg-slate-50 rounded-xl">
                <h3 class="m-0 p-0 font-semibold mb-10">Title: {{ post.title.rendered }}</h3>
                <div>
                    Image: <img :src="post.featuredImage" /> <!-- Bind image directly from post -->
                </div>
                <p>ID: {{ post.id }}</p>
                <div v-html="post.content.rendered" class="post-container"></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return {
            posts:[],
            featuredImage: ''
        }
    },
    async mounted(){
        await this.fetchData();
        //await this.getPostImage();
    },
    methods:{
        async fetchData(){
            try {
                let response = await axios.get('https://public-api.wordpress.com/wp/v2/sites/36240351/posts');
                console.log(response, 'response form axios')
                console.log(response.data, ' response data')
                this.posts = await Promise.all(response.data.map(async post => {
                    return {
                        ...post,
                        //featuredImage: await this.getPostImage(post) // Fetch and set image URL
                    };
                }));
            } catch (err) {
                console.log(err);
      }
        },
        // async getPostImage(post){
        //     try {
        //         let response = await axios.get(post._links["wp:featuredmedia"][0].href)
        //         let secondJson = response.data;
        //         return secondJson.guid.rendered
        //     }
        //     catch(error){
        //         console.error('Error fetching data:', error);
        //     }
        // }
    }
}

</script>
<style>
.container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
}
.post-container h1, h2, h3, h3 {
    margin-bottom: 20px 0;
}
.post-container, p {
    margin-bottom: 10px;
}
</style>