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
    <div>
        <CraftComponent
            v-for="block in entry.dynamicSection"
            :key="block.id ?? undefined"
            :data="block"
        />
    </div>
</template>
