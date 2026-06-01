<script setup lang="ts">
import { print } from 'graphql'
import type { NavigationQuery } from '~~/types/graphql'
import NavigationDocument from '@/queries/navigation.gql'

const nav = useState<NavigationQuery['navigationEntries']>('navigation')

await useAsyncData('navigation', async () => {
    const { data } = await $fetch<{ data: NavigationQuery }>('/api/craft', {
        method: 'POST',
        body: { query: print(NavigationDocument), operationName: 'Navigation' }
    })
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
