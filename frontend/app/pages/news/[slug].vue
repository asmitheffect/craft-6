<script setup lang="ts">
import newsArticleQuery from '@/queries/newsArticle.gql'
import type { NewsArticleQuery } from '~~/types/graphql'
import type { NewsArticleDetail } from '@/types/news'

const route = useRoute()
const slug = route.params.slug as string

const { data, error } = await useCraft<{ data: NewsArticleQuery }>(
    `news-${slug}`,
    newsArticleQuery,
    { slug: [slug] }
)

if (error.value) {
    throw createError({
        statusCode: error.value.status ?? 500,
        message: JSON.stringify(error.value.data ?? error.value.message),
        fatal: true
    })
}

const article = computed(() => data.value?.data?.entry as NewsArticleDetail | null | undefined)

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}
</script>

<template>
    <NewsArticle v-if="article" :article="article" />
</template>
