<template>
  <div id="banner-container" class="w-full min-h-[75vh] md:min-h-[85vh] flex items-center justify-center px-6 py-12 md:py-20">
    <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
      
      <div class="md:col-span-5 flex flex-col items-center text-center"> 
        <div class="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 mb-6 overflow-hidden rounded-full border-2 border-white/20 shadow-xl group">
          <img 
            id="my-image" 
            class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" 
            src="https://media.licdn.com/dms/image/v2/D5603AQHEiKK5XDtEUQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708328220776?e=1784764800&v=beta&t=PRi2WQ38jh6s2DPe7eQUjcXETuaVa7jSxFFjsEywqKk" 
            alt="Bon Thatthana"
            ref="cardImg"
          >
        </div>
        <h2 class="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-1">
          Bon Thatthana
        </h2>
        <h3 class="text-white/60 text-[11px] sm:text-xs font-mono tracking-widest uppercase bg-white/10 px-3 py-1 rounded-none border border-white/5">
          Technical ContentOps
        </h3>
      </div>
      
      <div class="md:col-span-7 flex flex-col justify-center space-y-4 text-center md:text-left md:border-l md:border-white/10 md:pl-12">
        <p class="text-white text-lg sm:text-xl md:text-2xl font-light tracking-wide leading-relaxed">
          Bridging the gap between digital content architecture and frontend execution.
        </p>
        
        <p class="text-white/70 text-sm sm:text-base font-light leading-relaxed max-w-xl">
          Specializing in headless CMS migrations, multilingual localization pipelines, and on-page asset optimization backed by a full-stack foundation in Vue.js and Firebase.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner'
};
</script>

<style scoped>
#banner-container {
  margin-top: 0;
  /* Dark overlay ensures high-contrast readability against the code image backdrop */
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url("https://orbitingweb.com/wp-content/uploads/code-on-laptop.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  #banner-container {
    background-attachment: scroll;
  }
}
</style>