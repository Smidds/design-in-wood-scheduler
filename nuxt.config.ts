// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@pinia/nuxt',
    'nuxt-auth-utils'
  ],

  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never'
      }
    }
  }

})
