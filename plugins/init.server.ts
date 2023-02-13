import { defineNuxtPlugin } from '#app'
import { usePersonStore } from '@/store/person'

export default defineNuxtPlugin(async (nuxtApp) => {
    const personStore = usePersonStore(nuxtApp.$pinia)
    await personStore.getPerson()
})