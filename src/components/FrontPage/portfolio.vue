<template>
  <div class="w-full bg-[#5C8374] py-16 md:py-24 transition-all duration-300">
    <div class="max-w-6xl mx-auto px-6">
      <div class="text-center mb-12 md:mb-16">
        <h2 class="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-3">
          Projects
        </h2>
        <p class="text-white/80 text-base sm:text-lg font-light tracking-wide max-w-3xl mx-auto">
          Selected frontend and full-stack projects focused on usability, API integration,
          and practical product thinking.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 justify-items-center mb-16">
        <div
          v-for="project in projects"
          :key="project.title"
          class="group flex flex-col justify-between bg-[#93B1A6] rounded-lg p-5 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-sm"
        >
          <div class="space-y-4">
            <div class="w-full aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <router-link v-if="project.demo.type === 'internal'" 
                :to="project.demo.url"
                class="block w-full h-full"
              >
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  :src="project.image"
                  :alt="project.title"
                />
              </router-link>
              <a v-else
                :href="project.demo.url"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full h-full"
              >
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  :src="project.image"
                  :alt="project.title"
                />
              </a>
            </div>

            <div class="space-y-3">
              <div>
                <h5 class="text-white font-bold text-lg tracking-tight">
                  {{ project.title }}
                </h5>
                <p class="text-white/90 text-sm font-light leading-relaxed mt-2">
                  {{ project.description }}
                </p>
              </div>

              <div>
                <p class="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  Key Features
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="feature in project.features"
                    :key="feature"
                    class="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium border border-white/10"
                  >
                    {{ feature }}
                  </span>
                </div>
              </div>

              <div>
                <p class="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  Tech Stack
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.techStack"
                    :key="tech"
                    class="px-3 py-1 rounded-full bg-[#5C8374] text-white text-xs font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-6 mt-4 border-t border-white/10">
            <router-link v-if="project.demo.type === 'internal'"
              :to="project.demo.url"
              class="text-sm font-semibold text-white hover:text-white/80 transition-colors"
            >
             Live Demo
            </router-link>
            <a v-else
              :href="project.demo.url"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-semibold text-white hover:text-white/80 transition-colors"
            >
              Live Demo
            </a>

            <a
              :href="project.repoUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80 transition-colors"
            >
              <i class="fa-brands fa-github text-lg"></i>
              <span>Repo</span>
            </a>
          </div>
        </div>
      </div>

      <div class="w-full py-4">
        <div class="w-full h-[1px] bg-white/10"></div>
      </div>

      <div class="text-center my-12">
        <h3 class="text-white text-xl sm:text-2xl font-bold tracking-tight">
          <p class="text-white/80 text-base sm:text-lg font-light tracking-wide max-w-3xl mx-auto">
            A selection of projects showcasing frontend engineering, API integration, and product-focused problem solving.
          </p>
        </h3>
      </div>

     <div class="grid grid-cols-1 gap-6 md:gap-8 justify-items-center mb-16">
        <div
          v-for="saa in saas"
          :key="saa.title"
          class="group flex flex-col justify-between bg-[#93B1A6] rounded-lg p-5 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl w-full max-w-sm"
        >
          <div class="space-y-4">
            <div class="w-full aspect-[4/3] overflow-hidden rounded-md bg-white/10">
              <a
                :href="saa.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full h-full"
              >
                <img
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  :src="saa.image"
                  :alt="saa.title"
                />
              </a>
            </div>

            <div class="space-y-3">
              <div>
                <h5 class="text-white font-bold text-lg tracking-tight">
                  {{ saa.title }}
                </h5>
                <p class="text-white/90 text-sm font-light leading-relaxed mt-2">
                  {{ saa.description }}
                </p>
              </div>

              <div>
                <p class="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  Key Features
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="feature in saa.features"
                    :key="feature"
                    class="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium border border-white/10"
                  >
                    {{ feature }}
                  </span>
                </div>
              </div>

              <div>
                <p class="text-white/80 text-xs font-semibold uppercase tracking-wider mb-2">
                  Tech Stack
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in saa.techStack"
                    :key="tech"
                    class="px-3 py-1 rounded-full bg-[#5C8374] text-white text-xs font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between pt-6 mt-4 border-t border-white/10">
            <a
              :href="saa.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-semibold text-white hover:text-white/80 transition-colors"
            >
              Live Demo
            </a>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import converrPage from "../../assets/converrpage.png"

export default {
  name: "PortfolioShowcase",
  data() {
    return {
      converrPage,
      saas: [
        {
          title: "ConverrPage",
          role: "Product Owner • Web Developer",
          liveUrl: "https://cms.converrpage.com",
          image: converrPage,
          description:
            "Led the planning and development of a modular landing page platform focused on conversion optimization, usability, and scalable marketing workflows.",
          features: [
            "Product Planning",
            "Landing Page Builder",
            "Conversion Tracking",
            "Cross-team Collaboration"
          ],
          techStack: [
            "Vue",
            "Nuxt",
            "Tailwind CSS",
            "Vuetify",
            "Firebase",
            "Cloudflare",
            "Kong"
          ]
        }
      ],
      projects: [
          {
          title: "Ecommerce Platform",
          demo: {
            type: "internal",
            url: "/products"
          },
          repoUrl: "https://github.com/BallThatthana/thatthanawebsite",
          image: "https://resources.americaneagle.com/aecom-blobs/images/default-source/blog-images/choosing-the-right-ecommerce-platform-og-image.jpg?sfvrsn=4daf414b_1", // or image URL
          description:
            "A modern eCommerce web application demonstrating a complete customer shopping journey. Showcases authentication, state management, responsive UI, and real-world commerce workflows.",
          features: [
            "Product Catalog",
            "Product Details",
            "Shopping Cart",
            "Checkout",
            "User Authentication",
            "Order History (soon)",
            "Contact Form",
            "Responsive Design"
          ],
          techStack: [
            "Vue",
            "Tailwind CSS",
            "Firebase Authentication",
            "Firestore",
            "Vue Router",
            "Nodemailer"
          ]
        },
        {
          title: "Developer Tooklit",
           demo: {
            type: "external",
            url: "https://universalformatdecoder.netlify.app"
          },
          repoUrl: "https://github.com/yourusername/universal-format-decoder",
          image: "https://www.commontools.org/articles/images/10/1.svg",
          description:
            "A developer productivity toolkit that simplifies common encoding, decoding, formatting, and validation tasks through a clean, responsive interface.",
          features: [
            "JSON Formatter",
            "JWT Decoder",
            "Base64 Tools",
            "HTML Entities",
            "URL Encode/Decode",
            "Markdown Preview"
          ],
          techStack: [
            "React",
            "Vite",
            "Tailwind CSS"
          ]
        },
        {
          title: "Meta Interest Explorer",
          demo: {
            type: "external",
            url: "https://hiddeninterestexplorer.netlify.app"
          },
          repoUrl: "https://github.com/yourusername/meta-interest-explorer",
          image: "https://cdn.searchenginejournal.com/wp-content/uploads/2024/09/img_2024-09-09-195224-837-1440x810.jpeg",
          description:
            "A full-stack marketing research tool that connects to the Meta Graph API to discover audience targeting opportunities through a fast and intuitive interface.",
          features: [
            "Meta Graph API",
            "Interest Search",
            "Audience Discovery",
            "Serverless Backend",
            "REST API"
          ],
          techStack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Netlify Functions",
            "Axios"
          ]
        },

        {
          title: "Meme Generator",
           demo: {
            type: "external",
            url: "https://memesgeneratorbybon.netlify.app"
          },
          repoUrl: "https://github.com/yourusername/meme-generator",
          image: "https://imgflip.com/s/meme/One-Does-Not-Simply.jpg",
          description:
            "A responsive web application that generates custom memes using a public API, demonstrating component-based development, API integration, and responsive UI design.",
          features: [
            "Meme API",
            "Image Generator",
            "Dynamic Captions",
            "Responsive Design",
            "Axios"
          ],
          techStack: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Axios"
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Optional: small hover polish for tag chips */
span {
  transition: all 0.25s ease;
}

.group:hover span {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
