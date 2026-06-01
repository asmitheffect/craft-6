<script setup lang="ts">
import entryQuery from '~/queries/pageEntry.gql'
import type { EntryInterface } from '~~/types/graphql'

const route = useRoute()
const slugParts = route.params.slug as string[] | undefined
const slug = (Array.isArray(slugParts) && slugParts.length > 0 ? slugParts.at(-1) : undefined) ?? '__home__'

const { data } = await useCraft<{ data: { entry: EntryInterface | null } }>(
    `entry-${slug}`,
    entryQuery,
    { slug: [slug] }
)

const entry = computed(() => data.value?.data?.entry)

const templateComponent = computed(() => {
    const handle = entry.value?.typeHandle
    if (!handle) return null
    return resolveComponent(handle.charAt(0).toUpperCase() + handle.slice(1))
})

if (!entry.value || templateComponent.value === null) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}
</script>

<template>
    <component :is="templateComponent" :entry="entry" />
</template>
