import ImageCarousel from '~/components/Blocks/ImageCarousel.vue'
import { registerCraftComponent } from '~/composables/useCraftComponents'

export default defineNuxtPlugin(() => {
    registerCraftComponent('imageCarousel_Entry', ImageCarousel)
})
