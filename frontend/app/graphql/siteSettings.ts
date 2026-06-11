import { graphql } from '~/gql'

export const siteSettingsQuery = graphql(`
    query SiteSettings {
        globalsEntries {
            ... on siteSettings_Entry {
                title
                copyright
            }
        }
    }
`)
