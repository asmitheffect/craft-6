<script setup lang="ts">
const props = defineProps<{
    data: { __typename?: string | null } & Record<string, unknown>
}>()

const { resolve } = useCraftComponents()

const component = computed(() => {
    const typename = props.data.__typename
    if (!typename) return null
    return resolve(typename)
})
</script>

<template>
    <component :is="component" v-if="component" v-bind="data" />
    <template v-else-if="data.__typename">
        <!-- Unregistered component: {{ data.__typename }} -->
    </template>
</template>
