import type { DocumentNode } from 'graphql'

export const useCraft = () => {
    const { isPreview, token, previewTimestamp } = usePreview()

    const fetchEntry = <T>(key: string, document: DocumentNode, variables?: Record<string, unknown>) => {
        const result = useAsyncData<T>(
            key,
            () => {
                const previewVars = isPreview.value
                    ? { token: token.value, provisionalDrafts: true }
                    : {}
                return craftFetch<T>(document, { ...variables, ...previewVars })
            },
            {
                watch: [isPreview, previewTimestamp],
                getCachedData: (key, nuxtApp) => isPreview.value ? undefined : nuxtApp.payload.data[key]
            }
        )

        if (import.meta.client) {
            const { refreshPreview } = usePreview()
            const handler = (event: MessageEvent) => {
                if (event.data?.event === 'saveDraft' || event.data?.event === 'saveElement') {
                    refreshPreview()
                }
            }
            onMounted(() => window.addEventListener('message', handler))
            onUnmounted(() => window.removeEventListener('message', handler))
        }

        return result
    }

    return { fetchEntry }
}
