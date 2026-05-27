import { computed, ref } from 'vue'
import { useRoute } from '#app'

export const usePreview = () => {
    const route = useRoute()

    const token = ref<string | null>(
        Array.isArray(route.query.token) ? null : (route.query.token ?? null)
    )
    const previewTimestamp = ref(Date.now())

    const isPreview = computed(() => !!route.query['x-craft-live-preview'])

    const refreshPreview = () => {
        previewTimestamp.value = Date.now()
    }

    return {
        isPreview,
        token,
        previewTimestamp,
        refreshPreview
    }
}
