import { print } from 'graphql'
import type { TypedDocumentNode } from '@graphql-typed-document-node/core'
import type { MaybeRefOrGetter } from 'vue'
import type { AsyncDataOptions } from 'nuxt/app'
import type { NuxtError } from '#app'

type CraftResponse<T> = { data: T }

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

const craftFetch = async <TResult, TVars>(
    document: TypedDocumentNode<TResult, TVars>,
    variables?: TVars,
    preview?: Record<string, unknown>
) => {
    try {
        return await $fetch<CraftResponse<TResult>>('/api/craft', {
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
        const knownError = e as NuxtError

        throw createError({
            statusCode: knownError.status ?? 500,
            message: JSON.stringify(knownError.data ?? knownError.message),
            fatal: true
        })
    }
}

export const useCraft = <TResult, TVars>(
    key: MaybeRefOrGetter<string>,
    document: TypedDocumentNode<TResult, TVars>,
    variables?: MaybeRefOrGetter<TVars>,
    options?: AsyncDataOptions<CraftResponse<TResult>>
) => {
    const { isPreview, draftId, canonicalId } = usePreviewParams()

    return useAsyncData<CraftResponse<TResult>>(
        key,
        () =>
            craftFetch<TResult, TVars>(
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

export const useCraftMany = <TResult, TVars>(
    key: MaybeRefOrGetter<string>,
    document: TypedDocumentNode<TResult, TVars>,
    variables?: MaybeRefOrGetter<TVars>,
    options?: AsyncDataOptions<CraftResponse<TResult>>
) => {
    return useAsyncData<CraftResponse<TResult>>(
        key,
        () => craftFetch<TResult, TVars>(document, toValue(variables)),
        options
    )
}
