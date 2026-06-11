<script setup lang="ts">
const { navItems } = useNavigation()
</script>

<template>
    <UHeader title="Nuxt|Craft">
        <UNavigationMenu :items="navItems" />
        <template #right>
            <UColorModeButton />
            <UButton to="/search" icon="i-lucide-search" variant="ghost" square color="neutral" />
        </template>
    </UHeader>
</template>
