<template>
  <div class="w-full max-w-5xl mx-auto px-6 text-center border-t border-black/10 transition-all duration-300">
    
    <div v-if="isAuth" class="flex justify-center items-center py-10 md:py-12">
      <a  
        class="inline-block bg-black text-white hover:bg-black/10 hover:text-black border border-black font-bold tracking-widest text-xs uppercase px-10 py-4 rounded-none transition-all duration-300 transform hover:scale-[1.03]" 
        href="https://docs.google.com/document/d/1eDTBBIQDwIsfHMJ8RCWK8aRvkHC96y0pJZUGnMgIp28/edit?usp=sharing" 
        target="_blank"
      >
        Download my CV
      </a>
    </div>

    <div v-else class="flex flex-col items-center justify-center py-12 md:py-16 space-y-3">
      <p class="text-black text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
        Sign up to download my CV
      </p>
      <p class="text-black/60 text-xs sm:text-sm font-light tracking-wide max-w-md">
        Create a free account to gain full access to my technical resume, project portfolio breakdowns, and direct channel resources.
      </p>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CVCallToAction',
  computed: {
    ...mapGetters(['isAuth'])
  }
}
</script>