<script setup lang="ts">
import newsListingQuery from '@/queries/news.gql'
import type { NewsListingQuery } from '~~/types/graphql'
import type { NewsGridArticle } from '@/types/news'

const { data, error } = await useCraftMany<{ data: NewsListingQuery }>(
    'news-listing',
    newsListingQuery
)

if (error.value) {
    throw createError({
        statusCode: error.value.status ?? 500,
        message: JSON.stringify(error.value.data ?? error.value.message),
        fatal: true
    })
}

const articles = computed(() =>
    (data.value?.data?.newsEntries ?? []).flatMap((e) => (e ? [e as NewsGridArticle] : []))
)
</script>

<template>
    <UContainer>
        <UPageHeader title="News" />
        <NewsGrid :articles="articles" class="mt-10" />
    </UContainer>
</template>
