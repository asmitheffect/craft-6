import { print, type DocumentNode } from 'graphql'

export const craftFetch = <T>(document: DocumentNode, variables?: Record<string, unknown>) => {
    return $fetch<T>('/api/craft', {
        method: 'POST',
        body: {
            query: print(document),
            operationName: document.definitions.find((d) => d.kind === 'OperationDefinition')?.name?.value,
            variables
        }
    })
}
