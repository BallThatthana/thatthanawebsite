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
        <h3 class="text-white/70 text-sm sm:text-base md:text-lg font-medium tracking-wide uppercase">
          Web Product Development
        </h3>
      </div>
      
      <div class="md:col-span-7 flex flex-col justify-center space-y-4 text-center md:text-left md:border-l md:border-white/10 md:pl-12">
        <p class="text-white/90 text-base sm:text-lg md:text-xl font-light leading-relaxed">
          Web development, digital marketing, content creation.
        </p>
        <p class="text-white/80 text-sm sm:text-base md:text-lg font-light leading-relaxed">
          Continuous learning and self-improvement. Eager to be a part of a great team and contribute to meaningful projects.
        </p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  methods: {
    // Legacy animations removed to prioritize clean UI stability.
  }
};
</script>

<style scoped>
#banner-container {
  margin-top: 0;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45)), url("https://orbitingweb.com/wp-content/uploads/code-on-laptop.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

/* Fallback configuration for mobile web browsers that struggle with fixed background attachments */
@media (max-width: 768px) {
  #banner-container {
    background-attachment: scroll;
  }
}
</style>