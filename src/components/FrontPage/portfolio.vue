<template>
  <div class="w-full bg-[#5C8374] py-16 md:py-24 transition-all duration-300">
    <div class="max-w-5xl mx-auto px-6">
      
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Projects
        </h2>
        <p class="text-white/80 text-base sm:text-lg font-light tracking-wide max-w-2xl mx-auto">
          These are websites I've developed myself.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center mb-16">
        
        <div class="group flex flex-col justify-between bg-[#93B1A6] rounded-lg p-5 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-sm">
          <div class="space-y-4">
            <div class="w-full aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <a href="https://encode-decode-url.web.app/" target="_blank" class="block w-full h-full">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://www.commontools.org/articles/images/10/1.svg" alt="encode-decode-app"/>
              </a>
            </div>
            <div class="space-y-2">
              <h5 class="text-white font-bold text-lg tracking-tight">Encode-Decode URL</h5>
              <p class="text-white/90 text-sm font-light leading-relaxed">
                Easily encode and decode URL strings securely to suit your everyday production routing configurations.
              </p>
            </div>
          </div>
          <div class="text-center pt-6 text-white/50 group-hover:text-white transition-colors text-xl">
            <i class="fab fa-vuejs"></i>
          </div>
        </div>

        <div class="group flex flex-col justify-between bg-[#93B1A6] rounded-lg p-5 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-sm">
          <div class="space-y-4">
            <div class="w-full aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <a href="https://effervescent-mooncake-0a224f.netlify.app/" target="_blank" class="block w-full h-full">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://media.istockphoto.com/id/617744688/pt/foto/hand-hold-blank-white-card-mockup-with-rounded-corners.jpg?s=170667a&w=0&k=20&c=T4dWk4hsZEXqO5gEEM6XfkshXU_6c53rKlYdhvDMHvA=" alt="guitarrich-logo"/>
              </a>
            </div>
            <div class="space-y-2">
              <h5 class="text-white font-bold text-lg tracking-tight">Business Card Project</h5>
              <p class="text-white/90 text-sm font-light leading-relaxed">
                Dynamic personal and business card component interfaces built with React based directly on professional Figma design layers.
              </p>
            </div>
          </div>
          <div class="text-center pt-6 text-white/50 group-hover:text-white transition-colors text-xl">
            <i class="fa-brands fa-react"></i>
          </div>
        </div>

        <div class="group flex flex-col justify-between bg-[#93B1A6] rounded-lg p-5 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-sm">
          <div class="space-y-4">
            <div class="w-full aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <a href="https://memesgeneratorbybon.netlify.app" target="_blank" class="block w-full h-full">
                <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://imgflip.com/s/meme/One-Does-Not-Simply.jpg" alt="memes-generator-logo"/>
              </a>
            </div>
            <div class="space-y-2">
              <h5 class="text-white font-bold text-lg tracking-tight">Memes Generator</h5>
              <p class="text-white/90 text-sm font-light leading-relaxed">
                A lightweight responsive frontend layout tool deployed explicitly to generate custom visual entertainment memes rapidly.
              </p>
            </div>
          </div>
          <div class="text-center pt-6 text-white/50 group-hover:text-white transition-colors text-xl">
            <i class="fa-brands fa-react"></i>
          </div>
        </div>

      </div>

      <div class="w-full py-4">
        <div class="w-full h-[1px] bg-white/10"></div>
      </div>

      <div class="text-center my-12">
        <h3 class="text-white text-xl sm:text-2xl font-bold tracking-tight">
          These are projects I've managed.
        </h3>
      </div>

      <div class="flex justify-center w-full">
        
        <div class="group flex flex-col justify-between bg-[#93B1A6] rounded-lg p-5 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-sm">
          <div class="space-y-4">
            <div class="w-full aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" :src="converrPage" alt="converrpage-logo"/>
            </div>
            <div class="space-y-2">
              <h5 class="text-white font-bold text-lg tracking-tight">ConverrPage</h5>
              <p class="text-white/80 text-xs font-semibold uppercase tracking-wider">Product Manager / Web Developer</p>
              <p class="text-white/90 text-sm font-light leading-relaxed">
                A modular application structure that enables users to easily build modern pages with no-code tools. Supports embedded conversion script tracking filters out of the box.
              </p>
            </div>
          </div>
          <div class="text-center pt-6 text-white/50 group-hover:text-white transition-colors text-xl">
            <i class="fa-brands fa-wordpress"></i>
            <i class="fa-brands fa-vuejs"></i>
            <i class="fa-brands fa-firebase"></i>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
import converrPage from "../../assets/converrpage.png"
export default {
  name: 'PortfolioShowcase',
  data(){
    return{
      converrPage
    }
  }
}
</script>

<style scoped>
/* Hardcoded fixed pixel height overrides removed safely. Layout limits are responsive. */
</style>