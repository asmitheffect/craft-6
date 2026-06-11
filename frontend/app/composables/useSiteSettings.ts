import { siteSettingsQuery } from '~/graphql/siteSettings'
import type { SiteSettingsQuery } from '~/gql/graphql'

type SiteSettings = NonNullable<SiteSettingsQuery['globalsEntries']>[number]

export const useSiteSettings = (): ComputedRef<SiteSettings | null> => {
    const { data } = useCraftMany('siteSettings', siteSettingsQuery)
    return computed(() => data.value?.data?.globalsEntries?.[0] ?? null)
}
