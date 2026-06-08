<script setup lang="ts">
import type { EntryInterface, DynamicSection_MatrixField } from '~~/types/graphql'

type PageEntryData = EntryInterface & {
    dynamicSection?: Array<DynamicSection_MatrixField>
}

defineProps<{
    entry: PageEntryData
}>()
</script>

<template>
    <template v-for="block in entry.dynamicSection" :key="block.id ?? undefined">
        <CraftComponent :data="block" />
    </template>
</template>
