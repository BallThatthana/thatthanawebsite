<template>
<div id="banner-container" class="min-h-[460px] container-fluid w-full flex flex-col xs:flex-row xs:items-center md:flex-row md:items-center justify-center font-bold">
    <div class="image-div mx-auto overflow-hidden"> 
      <!-- @mouseenter="startAnimation" @mouseleave="stopAnimation" -->
        <img id="my-image" class="mx-auto w-1/2 xs:w-2/3 mb-6 rounded-full" src="../../assets/my_image.jpg" alt="my-image"
        ref="cardImg">
        <h2 class="text-center text-white text-2xl md:text-3xl m-0">Bon Thatthana</h2>
        <h3 class="text-white text-center text-lg sm:text-xl">Web Developer</h3>
    </div>
    <div class="pb-6">
        <p class="text-center text-white text-sm sm:text-base md:text-xl lg:text-2xl font-normal">Web development, digital marketing, content creation.</p>
        <br>
        <p class="text-center text-white text-sm sm:text-base md:text-xl lg:text-2xl font-normal">Continuous learning and self-improvement. Eager to be a part of a great team and contribute to meaningful projects.</p>
    </div>
</div>



</template>
<script>

export default {
  methods: {
    // startAnimation() {
    //   const img = this.$refs.cardImg;
    //   img.style.transition = 'transform 1s ease-out';
    //   this.moveImage(img);
    // },
    // stopAnimation() {
    //   const img = this.$refs.cardImg;
    //   img.style.transition = 'transform 1s ease-out';
    //   img.style.transform = 'translate(0, 0)';
    // },
    // moveImage(img) {
    //   const maxX = window.innerWidth - img.clientWidth;
    //   const maxY = window.innerHeight - img.clientHeight;

    //   const maxOffsetX = Math.min(maxX, 100);
    //   const maxOffsetY = Math.min(maxY, 100);

    //   const randomX = Math.random() * maxOffsetX;
    //   const randomY = Math.random() * maxOffsetY;

    //   img.style.transform = `translate(${randomX}px, ${randomY}px)`;

    //   img.addEventListener('transitionend', () => {
    //     img.style.transition = 'none';
    //     setTimeout(() => {
    //       img.style.transition = 'transform 1s ease-out';
    //       this.moveImage(img);
    //     }, 0);
    //   }, { once: true });
    // },
  },
};
</script>
<style scoped>

  #banner-container {
    margin-top: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url("https://orbitingweb.com/wp-content/uploads/code-on-laptop.jpg");
    /* background-image: linear-gradient(rgba(0,0,0,0.7), rgb(0,0,0,0.4)), url("https://wallpaperaccess.com/full/442861.jpg"); */
    background-size: cover;
    background-position: center center;
    height: 720px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    width: 100%;
  }

  @media (max-width:720px){
    #banner-container{
        height: 540px;
    }
  }

  @media (max-width: 390px){
    #banner-container{
        height: 360px;
        padding: 60px 10px 0;
    }
  }

.my-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s;
}

/* .image-div:hover .card-img {
    animation: moveImage 3s linear infinite;
}

@keyframes moveImage {
    0% {
        transform: translate(0, 0);
    }
    25% {
        transform: translate(20px, 20px);
    }
    50% {
        transform: translate(0, 0);
    }
    75% {
        transform: translate(-20px, -20px);
    }
    100% {
        transform: translate(0, 0);
    }
} */

/* 
  @media (max-width: 837px){
    h2 {
      font-size: 60px;
    }
}

@media (max-width: 696px){
    h2{
      font-size: 50px;
    }
}

@media (max-width: 567px){
    h2{
      font-size: 48px;
    }
}

@media (max-width: 362px){
    h2 {
        font-size: 28px;
    }
  } */

  h2 {
  text-shadow: 0 2px 1px #3f3f3f, 0 4px 3px #000000;
}


</style>
