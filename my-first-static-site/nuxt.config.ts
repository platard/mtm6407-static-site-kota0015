// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss' ,'nuxt-icon'],
  runtimeConfig:{
    currencyKey:process.env.CURRENCY_API_KEY
  }

})
