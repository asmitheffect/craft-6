<script setup lang="ts">
import newsArticleQuery from '@/queries/newsArticle.gql'
import type { NewsArticleQuery } from '~~/types/graphql'
import type { NewsArticleDetail, NewsGridArticle } from '@/types/news'

const route = useRoute()
const slug = route.params.slug as string

const { data } = await useCraft<{ data: NewsArticleQuery }>(`news-${slug}`, newsArticleQuery, {
    slug: [slug]
})

const article = computed(() => data.value?.data?.entry as NewsArticleDetail | null | undefined)

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const categoryIds = computed(() => {
    const ids = (article.value?.categories ?? []).flatMap((c) => (c?.id ? [c.id] : []))
    return ids.length > 0 ? ids : null
})

type RelatedResponse = { entry: NewsArticleQuery['entry']; related?: Array<NewsGridArticle | null> }

const { data: relatedData } = await useCraft<{ data: RelatedResponse }>(
    `news-${slug}-related`,
    newsArticleQuery,
    computed(() => ({
        slug: [slug],
        id: article.value?.id ?? null,
        categoryIds: categoryIds.value
    }))
)

const related = computed(() => {
    const ids = new Set(categoryIds.value ?? [])
    return (relatedData.value?.data?.related ?? []).flatMap((entry): NewsGridArticle[] => {
        if (!entry) return []
        if (entry.id === article.value?.id) return []
        const sharesCategory = (entry.categories ?? []).some(
            (category) => category && 'id' in category && category.id && ids.has(category.id)
        )
        return sharesCategory ? [entry as NewsGridArticle] : []
    })
})
</script>

<template>
    <NewsArticle v-if="article" :article="article" :related="related" />
</template>
