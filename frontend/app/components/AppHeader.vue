<script setup lang="ts">
const { navItems } = useNavigation()
</script>

<template>
    <UHeader title="Nuxt|Craft">
        <UNavigationMenu :items="navItems" />
        <template #right>
            <UColorModeButton />
        </template>
    </UHeader>
</template>
