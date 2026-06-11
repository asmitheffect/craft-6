import { graphql } from '~/gql'

export const newsCardFragment = graphql(`
    fragment NewsCard on newsArticle_Entry {
        id
        title
        slug
        dateCreated
        summary
        heroImage {
            url(width: 400, height: 260, mode: "crop")
            alt
        }
        categories {
            ... on newsCategory_Entry {
                id
                title
                slug
            }
        }
    }
`)

export const newsListingQuery = graphql(`
    query NewsListing($limit: Int, $offset: Int) {
        total: entryCount(section: "news")
        newsEntries(limit: $limit, offset: $offset) {
            ...NewsCard
        }
    }
`)

export const newsArticleQuery = graphql(`
    query NewsArticle(
        $slug: [String]
        $draftId: Int
        $id: [QueryArgument]
        $status: [String]
        $provisionalDrafts: Boolean
        $categoryIds: [QueryArgument]
    ) {
        entry(
            section: "news"
            slug: $slug
            draftId: $draftId
            id: $id
            status: $status
            provisionalDrafts: $provisionalDrafts
        ) {
            ... on newsArticle_Entry {
                id
                title
                slug
                dateCreated
                summary
                heroImage {
                    thumb: url(width: 400, height: 400, mode: "crop")
                    full: url(width: 1200, height: 630, mode: "crop")
                    alt
                    width
                    height
                }
                categories {
                    ... on newsCategory_Entry {
                        id
                        title
                        slug
                    }
                }
                dynamicSection {
                    ... on EntryInterface {
                        id
                        __typename
                    }
                    ...ImageCarouselBlock
                }
            }
        }
        related: newsEntries(
            relatedToEntries: [{ id: $categoryIds, field: "categories" }]
            notRelatedTo: $id
            limit: 3
        ) {
            ...NewsCard
        }
    }
`)

export const newsCategoryQuery = graphql(`
    query NewsCategory($slug: [String]) {
        category: entry(section: "newsCategories", slug: $slug) {
            ... on newsCategory_Entry {
                id
                title
                slug
            }
        }
        articles: newsEntries(relatedToEntries: [{ section: "newsCategories", slug: $slug }]) {
            ...NewsCard
        }
    }
`)
