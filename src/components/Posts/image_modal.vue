<template>
    <div class="modal" @click="closeModal">
      <div class="modal-content shadow-xl" @click="closeModal">
        <img :src="imageUrl" alt="Full Screen" class="fullscreen-image" />
        <div class="details-container">
          <h2> {{ postTitle }}</h2>
          <p class="font-semibold text-large">details: {{ postDescription }}</p>
          <p class="font-semibold text-large mt-10">author: {{ postAuthor }}</p>
          <p class="font-semibold text-large">date: {{ postDate }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: String,
      postTitle: String,
      postDescription: String,
      postAuthor:String,
      postDate: String
    },
    methods:{
      closeModal() {
            // this.$store.commit('closeLogin')
            this.$emit('close')
        },
    }
  };
  </script>
  
  <style scoped>
.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex; /* Use flexbox to center content */
  align-items: center; /* Vertically center content */
  justify-content: center; 
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  cursor: pointer;
}

.modal-content {
  position: fixed;
  z-index: 9999;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  /* box-shadow: 1px 1px 30px 1px black; */
}

.fullscreen-image {
  width: 100%;
  max-width: 750px;
  height: auto;
  display: block;
  margin: 0 auto;
}

.details-container{
  padding: 20px;
}

@media screen and (max-width: 768px) {
  .modal-content{
    flex-direction: column;
    margin: 0 20px;
    max-width: 80%;
  }
}


  </style>
  