// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ['@vue-macros/nuxt', '@nuxtjs/supabase', '@nuxtjs/google-fonts', 'vue3-carousel-nuxt', '@nuxtjs/color-mode', 'nuxt-svgo', '@nuxt/image', '@nuxtjs/tailwindcss'],
    components: [
        {
            path: '~/components',
            pathPrefix: false,
            global: true,
        }
    ],
    ui: {
        primary: 'dark',
        gray: 'cool',
        global: true,
        // icons: ['mdi', 'simple-icons']
    },
    supabase: {
        redirect: false
    }
})
