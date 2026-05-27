<script setup lang="ts">
import type { NavigationQuery } from '~~/types/graphql'
import NavigationDocument from '@/queries/navigation.gql'

const nav = useState<NavigationQuery['navigationEntries']>('navigation')

await useAsyncData('navigation', async () => {
    const { data } = await craftFetch<{ data: NavigationQuery }>(NavigationDocument)
    nav.value = data.navigationEntries
    return null
})
</script>

<template>
    <UApp>
        <AppHeader />
        <UMain>
            <NuxtPage />
        </UMain>
    </UApp>
</template>
