<script setup lang="ts">
import newsListingQuery from '@/queries/news.gql'
import type { NewsListingQuery } from '~~/types/graphql'

const { fetchEntry } = useCraft()

const { data, error } = await fetchEntry<{ data: NewsListingQuery }>(
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

const articles = computed(() => (data.value?.data.newsEntries ?? []).flatMap((e) => (e ? [e] : [])))
</script>

<template>
    <UContainer>
        <UPageHeader title="News" />
        <NewsGrid :articles="articles" class="mt-10" />
    </UContainer>
</template>
