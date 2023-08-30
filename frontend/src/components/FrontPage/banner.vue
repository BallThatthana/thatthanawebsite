<template>
    <div id="banner-container" class="container-fluid w-full flex justify-center items-center font-bold">
        <div class="container-fluid">
            <h2 class="text-white mb-2">Ball Thatthana</h2>
            <h3 class="text-white">Frontend Developer</h3>
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
