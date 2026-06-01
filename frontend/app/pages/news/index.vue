<script setup lang="ts">
import newsListingQuery from '@/queries/news.gql'
import type { NewsListingQuery } from '~~/types/graphql'
import type { NewsGridArticle } from '@/types/news'

const { data } = await useCraftMany<{ data: NewsListingQuery }>(
    'news-listing',
    newsListingQuery
)

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
