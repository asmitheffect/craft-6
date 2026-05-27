<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import type { NavigationQuery } from '~~/types/graphql'

type NavEntry = NonNullable<NonNullable<NavigationQuery['navigationEntries']>[number]>
type NavChild = NonNullable<NavEntry['children'][number]>

const nav = useState<NavigationQuery['navigationEntries']>('navigation')

const toTo = (path: NavEntry['path']): string | undefined => {
    if (!path) return undefined
    if (path.element?.uri) return path.element.uri === '__home__' ? '/' : `/${path.element.uri}`
    return craftEntryUrl(path.url)
}

const toMenuItem = (item: NavEntry): NavigationMenuItem => {
    return {
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
    }
}

const items = computed<NavigationMenuItem[]>(() =>
    (nav.value ?? []).flatMap((item) => (item ? [toMenuItem(item)] : []))
)
</script>

<template>
    <UHeader title="Nuxt|Craft">
        <UNavigationMenu :items="items" />
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>
