import { graphql } from '~/gql'

export const homePageQuery = graphql(`
    query HomePage(
        $draftId: Int
        $id: [QueryArgument]
        $status: [String]
        $provisionalDrafts: Boolean
    ) {
        entry(
            section: "homePage"
            draftId: $draftId
            id: $id
            status: $status
            provisionalDrafts: $provisionalDrafts
        ) {
            ... on home_Entry {
                id
                title
                brow
                subtitle
                heroImage {
                    url(handle: "hero")
                    alt
                    width(handle: "hero")
                    height(handle: "hero")
                }
                buttonGroup {
                    ... on button_Entry {
                        title
                        variant
                        path {
                            url
                            target
                        }
                    }
                }
            }
        }
    }
`)
