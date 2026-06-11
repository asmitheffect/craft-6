import type { NavigationMenuItem } from '@nuxt/ui'
import { navigationQuery } from '~/graphql/navigation'
import type { NavigationQuery } from '~/gql/graphql'

type NavigationEntries = NavigationQuery['navigationEntries']
type NavEntry = NonNullable<NonNullable<NavigationEntries>[number]>
type NavChild = NonNullable<NavEntry['children'][number]>

const toTo = (path: NavEntry['path']): string | undefined => {
    if (!path) return undefined
    if (path.element?.uri) return path.element.uri === '__home__' ? '/' : `/${path.element.uri}`
    return craftEntryUrl(path.url)
}

const toNavItem = (item: NavEntry): NavigationMenuItem => ({
    label: item.path?.label ?? item.title ?? '',
    to: toTo(item.path),
    target: item.path?.target ?? undefined,
    children: (item.children ?? [])
        .filter((child): child is NavChild & { path: NavEntry['path'] } => 'path' in child)
        .map((child) => ({
            label: child.path?.label ?? child.title ?? '',
            to: toTo(child.path),
            target: child.path?.target ?? undefined
        }))
})

export const useNavigation = () => {
    const { data } = useCraftMany('navigation', navigationQuery)
    const entries = computed(() => data.value?.data?.navigationEntries ?? null)
    const navItems = computed<NavigationMenuItem[]>(() =>
        (entries.value ?? []).flatMap((item) => (item ? [toNavItem(item)] : []))
    )
    return { entries, navItems }
}
