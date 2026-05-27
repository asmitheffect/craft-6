import { print, visit, Kind, type DocumentNode } from 'graphql'

const ENTRY_QUERY_FIELDS = new Set([
    'entry',
    'entries',
    'navigationEntries',
    'homePageEntries',
    'pagesEntries'
])

function withDraftStatus(document: DocumentNode): DocumentNode {
    return visit(document, {
        Field(node) {
            if (!ENTRY_QUERY_FIELDS.has(node.name.value)) return
            if (node.arguments?.some((a) => a.name.value === 'status')) return

            return {
                ...node,
                arguments: [
                    ...(node.arguments ?? []),
                    {
                        kind: Kind.ARGUMENT,
                        name: { kind: Kind.NAME, value: 'status' },
                        value: { kind: Kind.NULL }
                    }
                ]
            }
        }
    })
}

export const craftFetch = <T>(document: DocumentNode, variables?: Record<string, unknown>) => {
    const { public: { draftContent } } = useRuntimeConfig()

    const doc = draftContent ? withDraftStatus(document) : document

    return $fetch<T>('/api/craft', {
        method: 'POST',
        body: {
            query: print(doc),
            operationName: document.definitions.find((d) => d.kind === 'OperationDefinition')?.name?.value,
            variables
        }
    })
}
