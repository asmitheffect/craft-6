<script setup lang="ts">
import type { EntryInterface } from '~~/types/graphql'

type PageEntryData = EntryInterface & {
    dynamicSection?: Array<
        { __typename?: string | null; id?: string | null } & Record<string, unknown>
    >
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
