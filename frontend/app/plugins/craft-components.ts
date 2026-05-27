import ImageCarousel from '~/components/CMS/ImageCarousel.vue'
import { registerCraftComponent } from '~/composables/useCraftComponents'

export default defineNuxtPlugin(() => {
    registerCraftComponent('imageCarousel_Entry', ImageCarousel)
})
