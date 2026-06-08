<script setup lang="ts">
const siteSettings = useSiteSettings()

const { navItems } = useNavigation()
</script>

<template>
    <UFooter>
        <template #left>
            <p>
                {{ siteSettings?.copyright }}
            </p>
        </template>
        <UNavigationMenu :items="navItems" variant="link" />
    </UFooter>
</template>
