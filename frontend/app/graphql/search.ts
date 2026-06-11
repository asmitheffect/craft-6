import { graphql } from '~/gql'

export const searchQuery = graphql(`
    query Search($q: String) {
        total: entryCount(search: $q, section: ["pages", "news"])
        entries(search: $q, section: ["pages", "news"]) {
            id
            title
            url
            ... on newsArticle_Entry {
                summary
            }
            ... on pageEntry_Entry {
                uri
            }
        }
    }
`)
