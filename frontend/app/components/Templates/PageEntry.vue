<script setup lang="ts">
import type { PageEntryQuery } from '~/gql/graphql'

type PageEntryData = Extract<NonNullable<PageEntryQuery['entry']>, { dynamicSection?: unknown }>

defineProps<{
    entry: PageEntryData
}>()
</script>

<template>
    <template v-for="block in entry.dynamicSection" :key="block?.id ?? undefined">
        <CraftComponent v-if="block" :data="block" />
    </template>
</template>
