import { print, type DocumentNode } from 'graphql'

export const useCraft = () => {
    const route = useRoute()
    const { draftId, canonicalId, onCraftSave } = usePreview()
    const isPreview = computed(() => !!route.query['x-craft-live-preview'])

    const fetchEntry = <T>(key: string, document: DocumentNode, variables?: Record<string, unknown>) => {
        const result = useAsyncData<T>(
            key,
            () => {
                const previewVars = isPreview.value
                    ? {
                        draftId: draftId.value ? Number(draftId.value) : null,
                        canonicalId: canonicalId.value ? Number(canonicalId.value) : null,
                        provisionalDrafts: true
                    }
                    : {}
                return $fetch<T>('/api/craft', {
                    method: 'POST',
                    body: { query: print(document), variables: { ...variables, ...previewVars } }
                })
            },
            {
                getCachedData: (key, nuxtApp) => isPreview.value ? undefined : nuxtApp.payload.data[key]
            }
        )

        if (import.meta.client) {
            onCraftSave(() => result.refresh())
        }

        return result
    }

    return { fetchEntry }
}
