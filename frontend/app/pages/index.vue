<script setup lang="ts">
import { homePageQuery } from '~/graphql/homePage'
import type { ButtonProps } from '@nuxt/ui'

const { data } = await useCraft('home-page', homePageQuery)

const entry = computed(() => data.value?.data?.entry)

const links = computed<ButtonProps[]>(() => {
    if (!entry.value) return []

    return (
        entry.value.buttonGroup.map((button) => ({
            label: button?.title ?? undefined,
            href: craftEntryUrl(button?.path?.url),
            target: button?.path?.target ?? undefined,
            variant: (button?.variant ?? 'solid') as ButtonProps['variant']
        })) ?? []
    )
})
</script>

<template>
    <UContainer>
        <UPageHero
            :title="entry?.title ?? ''"
            :headline="entry?.brow ?? ''"
            :description="entry?.subtitle ?? ''"
            :links="links"
        >
            <img
                v-if="entry?.heroImage?.length"
                :src="entry.heroImage[0]?.url ?? ''"
                :alt="entry.heroImage[0]?.alt ?? ''"
                :width="entry.heroImage[0]?.width ?? undefined"
                :height="entry.heroImage[0]?.height ?? undefined"
                class="rounded-3xl"
            />
        </UPageHero>
    </UContainer>
</template>
