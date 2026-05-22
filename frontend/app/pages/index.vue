<script setup lang="ts">
import homePageQuery from '~/queries/homePage.gql'
import type { HomePageQuery } from '~~/types/graphql'
import type { ButtonProps } from '@nuxt/ui'

const { fetchEntry } = useCraft()

const { data, error } = await fetchEntry<{ data: HomePageQuery }>('home-page', homePageQuery)

if (error.value) {
    throw createError({
        statusCode: error.value.status ?? 500,
        message: JSON.stringify(error.value.data ?? error.value.message),
        fatal: true
    })
}

const entry = computed(() => data.value?.data.entry)

const links = computed<ButtonProps[]>(() => {
    if (!entry.value) return []

    return (
        entry.value.buttonGroup.map((button) => ({
            label: button?.title ?? undefined,
            href: button?.path?.url ?? undefined,
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
