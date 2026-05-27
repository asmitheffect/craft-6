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
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            <NewsCard
                v-for="article in articles"
                :key="article.id ?? undefined"
                :article="article"
            />
        </div>
    </UContainer>
</template>
