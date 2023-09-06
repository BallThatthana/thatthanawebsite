<template>
<div id="banner-container" class="min-h-[460px] container-fluid w-full flex flex-col xs:flex-row xs:items-center md:flex-row md:items-center justify-center font-bold">
    <div class="mx-auto overflow-hidden">
        <img id="my-image" class="mx-auto w-1/2 md:w-2/3 mb-6 rounded-full" src="../../assets/image.jpg" alt="image">
        <h2 class="text-center text-white text-xl sm:text-2xl">Ball Thatthana</h2>
        <!-- <h3 class="text-white">Frontend Developer</h3> -->
    </div>
    <div class="pb-6">
        <p class="text-center text-white text-sm sm:text-base md:text-xl lg:text-2xl font-normal">Experienced in web development, digital marketing and content creation. 
            Several years of experience in the hospitality industry.</p>
        <br>
        <p class="text-center text-white text-sm sm:text-base md:text-xl lg:text-2xl font-normal">Willing to be a part of a great team to contribute to a meaningful project.</p>
    </div>
</div>



</template>
<script>

export default{

}

</script>
<style scoped>

  #banner-container {
    background-image: linear-gradient(rgba(0,0,0,0.7), rgb(0,0,0,0.4)), url("https://wallpaperaccess.com/full/442861.jpg");
    background-size: cover;
    background-position: bottom center;
    height: 720px;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }

  @media (max-width: 720px){
    #banner-container{
        height: 540px;
    }
  }

  @media (max-width: 390px){
    #banner-container{
        height: 360px;
    }
  }
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
