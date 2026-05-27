<script setup lang="ts">
import type { NewsGridArticle, ArticleCategory } from '@/types/news'

const props = defineProps<{
    articles: NewsGridArticle[]
}>()

const posts = computed(() =>
    props.articles.map((article) => {
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
    <UBlogPosts>
        <UBlogPost
            v-for="(post, index) in posts"
            :key="index"
            v-bind="post"
        />
    </UBlogPosts>
</template>
