<script setup lang="ts">
import newsListingQuery from '@/queries/news.gql'
import type { NewsListingQuery } from '~~/types/graphql'
import type { ArticleCategory } from '@/types/news'

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

const posts = computed(() =>
    articles.value.map((article) => {
        const firstCategory = (article.categories ?? [])
            .flatMap((c): ArticleCategory[] => (c ? [c] : []))[0] ?? null

        return {
            title: article.title ?? '',
            description: article.summary ?? undefined,
            image: article.heroImage?.[0]?.url ?? undefined,
            date: article.dateCreated ? new Date(article.dateCreated as string) : undefined,
            badge: firstCategory ? { label: firstCategory.title ?? '' } : undefined,
            to: `/news/${article.slug}`,
        }
    })
)
</script>

<template>
    <UContainer>
        <UPageHeader title="News" />
        <UBlogPosts class="mt-10">
            <UBlogPost
                v-for="(post, index) in posts"
                :key="index"
                v-bind="post"
            />
        </UBlogPosts>
    </UContainer>
</template>
