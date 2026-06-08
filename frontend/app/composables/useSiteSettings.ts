import SiteSettingsQuery from '@/queries/siteSettings.gql'
import type { SiteSettingsQuery as SiteSettingsQueryType } from '~~/types/graphql'

type SiteSettings = NonNullable<SiteSettingsQueryType['globalsEntries']>[number]

export const useSiteSettings = (): ComputedRef<SiteSettings | null> => {
    const { data } = useCraftMany<{ data: SiteSettingsQueryType }>(
        'siteSettings',
        SiteSettingsQuery
    )
    return computed(() => data.value?.data?.globalsEntries?.[0] ?? null)
}
