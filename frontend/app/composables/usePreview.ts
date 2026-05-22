import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from '#app'

export const usePreview = () => {
    const route = useRoute()

    const draftId = computed<string | null>(() =>
        Array.isArray(route.query.draftId) ? null : (route.query.draftId ?? null)
    )
    const canonicalId = computed<string | null>(() =>
        Array.isArray(route.query.canonicalId) ? null : (route.query.canonicalId ?? null)
    )

    const isPreview = computed(() => !!route.query['x-craft-live-preview'])

    const onCraftSave = (callback: () => void) => {
        const handler = (event: MessageEvent) => {
            if (event.data?.event === 'saveDraft' || event.data?.event === 'saveElement') {
                callback()
            }
        }
        onMounted(() => window.addEventListener('message', handler))
        onUnmounted(() => window.removeEventListener('message', handler))
    }

    return {
        isPreview,
        draftId,
        canonicalId,
        onCraftSave,
    }
}
