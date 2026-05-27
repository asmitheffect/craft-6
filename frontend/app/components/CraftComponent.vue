<script setup lang="ts">
const props = defineProps<{
    data: { __typename?: string | null } & Record<string, unknown>
}>()

const component = computed(() => {
    const typename = props.data.__typename
    if (!typename) return null
    const name = typename.replace(/_Entry$/, '')
    return resolveComponent(name.charAt(0).toUpperCase() + name.slice(1))
})
</script>

<template>
    <component :is="component" v-if="component" v-bind="data" />
</template>
