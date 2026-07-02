<template>
  <div class="w-full bg-white text-black py-16 md:py-24 border-t border-black/5 transition-all duration-300">
    <div class="max-w-5xl mx-auto px-6">
      
      <div class="mb-12">
        <p class="text-[10px] font-mono tracking-widest text-black/40 uppercase mb-2">Profile Overview</p>
        <h2 class="text-black text-2xl sm:text-3xl font-bold tracking-tight">About My Work</h2>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <div class="lg:col-span-7 space-y-6 text-black/80 font-light text-base leading-relaxed">
          <p class="text-black font-medium text-lg leading-snug tracking-tight">
            Technical Content Operations (ContentOps) & CMS Specialist bridging the gap between digital strategy, system architecture, and frontend execution.
          </p>
          <p>
            I manage, optimize, and scale complex content ecosystems across <span class="font-semibold text-black">WordPress, Shopify, and Strapi</span>, with a strict focus on structural performance and data schema engineering. Unlike traditional content managers, I bring a robust full-stack foundation to my operational roles—allowing me to configure databases, manage microservices, and interface with API endpoints fluidly without needing to wait on external developer tickets.
          </p>
          <p>
            Having engineered, scaled, and managed acquisition pipelines for my own e-commerce operations, I hold a deep data-driven understanding of how architecture processing latency, conversion tracking loops, and interface interactions directly impact commercial metrics.
          </p>
          <p>
            I thrive in cross-functional engineering spaces that place a premium on clean execution, high autonomy, and architectural clarity.
          </p>
        </div>

        <div class="lg:col-span-5 space-y-8 bg-gray-50 p-6 border border-black/5">
          
          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-widest text-black">Content Ecosystems</h4>
            <div class="w-full h-[1px] bg-black/10"></div>
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="text-xs font-mono bg-black/5 text-black/80 px-2.5 py-1">WordPress / Elementor</span>
              <span class="text-xs font-mono bg-black/5 text-black/80 px-2.5 py-1">Shopify Liquid</span>
              <span class="text-xs font-mono bg-black/5 text-black/80 px-2.5 py-1">Strapi Headless</span>
              <span class="text-xs font-mono bg-black/5 text-black/80 px-2.5 py-1">Schema & SEO Engineering</span>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-widest text-black">Engineering Stack</h4>
            <div class="w-full h-[1px] bg-black/10"></div>
            <div class="flex flex-wrap gap-2 pt-1">
              <span class="text-xs font-mono bg-black/5 text-black/80 px-2.5 py-1">Vue.js / Nuxt.js</span>
              <span class="text-xs font-mono bg-black/5 text-black/80 px-2.5 py-1">Firebase Backend Suite</span>
              <span class="text-xs font-mono bg-black/5 text-black/80 px-2.5 py-1">JavaScript / HTML5 / CSS3</span>
              <span class="text-xs font-mono bg-black/5 text-black/80 px-2.5 py-1">Tailwind CSS / Vuetify</span>
              <span class="text-xs font-mono bg-black/5 text-black/80 px-2.5 py-1">React / Next.js Core</span>
            </div>
          </div>

          <div class="space-y-3">
            <h4 class="text-xs font-bold uppercase tracking-widest text-black">Strategic Targets</h4>
            <div class="w-full h-[1px] bg-black/10"></div>
            <p class="text-xs text-black/60 font-light leading-relaxed">
              Actively focusing on opportunities within <span class="font-semibold text-black">Content Operations (ContentOps)</span>, Technical Content Management Systems, or Hybrid Frontend Product Optimization squads.
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileOverview'
}
</script>

<style scoped>
/* Grid architecture is driven entirely by native Tailwind utility layouts. */
</style>