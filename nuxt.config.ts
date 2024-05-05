// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    'nuxt-icon',
    '@nuxt/image',
    'vue3-carousel-nuxt',
    'nuxt3-notifications',
    '@pinia/nuxt',
    "@nuxt/ui"
  ],
  experimental: {
    defaults: {
      nuxtLink: {
        // default values
        componentName: 'NuxtLink',
        externalRelAttribute: 'noopener noreferrer',
        activeClass: 'router-link-active',
        exactActiveClass: 'router-link-exact-active',
        prefetchedClass: undefined, 
        trailingSlash: undefined 
      }
    }
  },



  css: ['~/assets/css/main.css'],
  // carousel: {
  //   prefix: 'MyPrefix'
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})