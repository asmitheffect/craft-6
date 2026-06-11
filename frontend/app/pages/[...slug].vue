<script setup lang="ts">
import { pageEntryQuery } from '~/graphql/pageEntry'

const route = useRoute()
const slugParts = route.params.slug as string[] | undefined
const slug =
    (Array.isArray(slugParts) && slugParts.length > 0 ? slugParts.at(-1) : undefined) ?? '__home__'

const { data } = await useCraft(`entry-${slug}`, pageEntryQuery, { slug: [slug] })

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
