import { print, type DocumentNode } from 'graphql'

export const useCraft = () => {
    const origin = useRequestURL().origin

    const fetchEntry = <T>(key: string, document: DocumentNode, variables?: Record<string, unknown>) => {
        return useAsyncData<T>(key, () =>
            $fetch<T>('/api/craft', {
                method: 'POST',
                body: { query: print(document), variables },
                baseURL: origin
            })
        )
    }

    return { fetchEntry }
}
