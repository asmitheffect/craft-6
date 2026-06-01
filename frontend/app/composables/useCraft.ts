import { print, type DocumentNode } from 'graphql'
import type { MaybeRefOrGetter } from 'vue'
import type { AsyncDataOptions } from 'nuxt/app'

const usePreviewParams = () => {
    const route = useRoute()

    const isPreview = computed(() => !!route.query['x-craft-live-preview'])

    const draftId = computed<number | null>(() => {
        const val = route.query.draftId
        const parsed = parseInt(Array.isArray(val) ? (val[0] ?? '') : (val ?? ''))
        return isNaN(parsed) ? null : parsed
    })

    const canonicalId = computed<number | null>(() => {
        const val = route.query.canonicalId
        const parsed = parseInt(Array.isArray(val) ? (val[0] ?? '') : (val ?? ''))
        return isNaN(parsed) ? null : parsed
    })

    return { isPreview, draftId, canonicalId }
}

const craftFetch = async <T>(
    document: DocumentNode,
    variables?: Record<string, unknown>,
    preview?: Record<string, unknown>
) => {
    try {
        return await $fetch<T>('/api/craft', {
            method: 'POST',
            body: {
                query: print(document),
                operationName: document.definitions.find((d) => d.kind === 'OperationDefinition')
                    ?.name?.value,
                variables,
                ...preview
            }
        })
    } catch (e: unknown) {
        const err = e as { status?: number; data?: unknown; message?: string }
        throw createError({
            statusCode: err.status ?? 500,
            message: JSON.stringify(err.data ?? err.message),
            fatal: true
        })
    }
}

export const useCraft = <T>(
    key: MaybeRefOrGetter<string>,
    document: DocumentNode,
    variables?: MaybeRefOrGetter<Record<string, unknown>>,
    options?: AsyncDataOptions<T>
) => {
    const { isPreview, draftId, canonicalId } = usePreviewParams()

    return useAsyncData<T>(
        key,
        () =>
            craftFetch<T>(
                document,
                toValue(variables),
                isPreview.value
                    ? {
                          draftId: draftId.value ?? undefined,
                          canonicalId: canonicalId.value ?? undefined
                      }
                    : undefined
            ),
        options
    )
}

export const useCraftMany = <T>(
    key: MaybeRefOrGetter<string>,
    document: DocumentNode,
    variables?: MaybeRefOrGetter<Record<string, unknown>>,
    options?: AsyncDataOptions<T>
) => {
    return useAsyncData<T>(key, () => craftFetch<T>(document, toValue(variables)), options)
}
