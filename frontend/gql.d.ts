declare module '*.gql' {
    import type { DocumentNode } from 'graphql'

    const document: DocumentNode
    export default document
}
