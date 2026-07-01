<template>
  <div class="w-full bg-[#5C8374] py-16 md:py-24 transition-all duration-300">
    <div class="max-w-5xl mx-auto px-6">

      <!-- Section Header -->
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-white text-3xl sm:text-4xl font-bold tracking-tight uppercase tracking-widest">
          Projects
        </h2>
        <p class="text-white/80 text-base sm:text-lg font-light tracking-wide max-w-2xl mx-auto mt-3">
          Here are some of the projects I've built or contributed to professionally.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Project 1 -->
        <div class="group flex flex-col justify-between bg-[#93B1A6] rounded-lg p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div class="space-y-4">
            <div class="w-full aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <a href="https://encode-decode-url.web.app/" target="_blank" class="block w-full h-full">
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://www.commontools.org/articles/images/10/1.svg"
                  alt="Encode Decode URL"
                />
              </a>
            </div>

            <div class="space-y-2">
              <h5 class="text-white font-bold text-lg">
                Encode-Decode URL
              </h5>

              <p class="text-white/90 text-sm leading-relaxed">
                Easily encode and decode URL configurations that match your custom routing context.
              </p>
            </div>
          </div>

          <div class="text-center pt-4 text-white/40 group-hover:text-white text-xl transition-colors">
            <i class="fab fa-vuejs"></i>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="group flex flex-col justify-between bg-[#93B1A6] rounded-lg p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div class="space-y-4">
            <div class="w-full aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <a href="https://effervescent-mooncake-0a224f.netlify.app/" target="_blank" class="block w-full h-full">
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://media.istockphoto.com/id/617744688/pt/foto/hand-hold-blank-white-card-mockup-with-rounded-corners.jpg?s=170667a&w=0&k=20&c=T4dWk4hsZEXqO5gEEM6XfkshXU_6c53rKlYdhvDMHvA="
                  alt="Business Card Project"
                />
              </a>
            </div>

            <div class="space-y-2">
              <h5 class="text-white font-bold text-lg">
                Business Card Project
              </h5>

              <p class="text-white/90 text-sm leading-relaxed">
                Interactive business card interface built with React components based on a Figma design.
              </p>
            </div>
          </div>

          <div class="text-center pt-4 text-white/40 group-hover:text-white text-xl transition-colors">
            <i class="fa-brands fa-react"></i>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="group flex flex-col justify-between bg-[#93B1A6] rounded-lg p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
          <div class="space-y-4">
            <div class="w-full aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <a href="https://cms.converrpage.com" target="_blank" class="block w-full h-full">
                <img
                  :src="coverImage"
                  alt="ConverrPage"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </a>
            </div>

            <div class="space-y-2">
              <h5 class="text-white font-bold text-lg">
                ConverrPage
              </h5>

              <p class="text-white/80 text-sm font-medium">
                Product Manager & Web Developer
              </p>

              <p class="text-white/90 text-sm leading-relaxed">
                Led the product development while contributing to website development, content management, SEO, analytics, and digital marketing. ConverrPage enables businesses to build websites and landing pages without coding.
              </p>
            </div>
          </div>

          <div class="text-center pt-4 text-white/40 group-hover:text-white text-xl transition-colors">
            <i class="fa-solid fa-briefcase"></i>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import coverImage from '../../assets/converrpage.png'

export default{ 
  data () {
    return {
      coverImage
    }
}

}</script>

<style scoped>

.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    max-width: 1200px;
    gap: 10px;
    box-sizing: border-box;
}
.card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    margin: 10px 0;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    max-width: 300px;
    height: 400px;
    background-color: #93B1A6;
    background: #93B1A6;
    color: white;
    padding: 20px;
    margin: 10px 20px;
    border-radius: 10px;
    flex-grow: 1;
}


img {
  width: 100%;
  max-width: 300px;
  height: 250px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
}

.icon-div {
    text-align: center;
}

.card-description{
    height: 50px;
}

@media(max-width:768px) {
    .card {
        /* flex: 0 0 calc(50% - 10px); */
        margin: 20px;
    }
}


.card:hover, .card-image {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
}

.card-text {
    width: 100%;
    overflow: hidden;
}

.portfolio-section{
    background-color: #5C8374;
}

h2, h3, h4, h5, p {
    color: white;
}

</style>