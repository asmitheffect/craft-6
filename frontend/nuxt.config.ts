// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/eslint', '@nuxt/ui', '@vueuse/nuxt'],

    components: [
        { path: '~/components/Craft', global: true },
        { path: '~/components/Templates', global: true },
        '~/components'
    ],

    devtools: {
        enabled: true
    },

    css: ['~/assets/css/main.css'],

    runtimeConfig: {
        craftApiToken: process.env.CRAFT_API_TOKEN,
        public: {
            craftApiUrl: process.env.CRAFT_API_URL,
            draftContent: process.env.DRAFT_CONTENT === 'true'
        }
    },

    routeRules: {},

    compatibilityDate: '2025-01-15',

    eslint: {
        config: {
            stylistic: {
                commaDangle: 'never',
                braceStyle: '1tbs'
            }
        }
    }
})
