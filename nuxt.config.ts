// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        ['@pinia/nuxt',
            {
                autoImports: [
                    'defineStore'
                ]
            }
        ]

    ],
    app: {
        head: {
            bodyAttrs: {
                class: 'h-screen'
            },
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Catamaran&display=swap",
                },
            ],
        }
    },
    css: ["@/assets/styles/main.scss"],

})
