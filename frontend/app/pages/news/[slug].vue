<script setup lang="ts">
import { newsArticleQuery } from '~/graphql/news'
import type { NewsArticleQuery } from '~/gql/graphql'

type NewsArticleDetail = Extract<
    NonNullable<NewsArticleQuery['entry']>,
    { dynamicSection?: unknown }
>

const route = useRoute()
const slug = route.params.slug as string

const { data } = await useCraft(`news-${slug}`, newsArticleQuery, { slug: [slug] })

const article = computed(() => data.value?.data?.entry as NewsArticleDetail | null | undefined)

if (!article.value) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found', fatal: true })
}

const categoryIds = computed(() => {
    const ids = (article.value?.categories ?? []).flatMap((c) => (c?.id ? [c.id] : []))
    return ids.length > 0 ? ids : null
})

const { data: relatedData } = await useCraft(
    `news-${slug}-related`,
    newsArticleQuery,
    computed(() => ({
        slug: [slug],
        id: article.value?.id ?? null,
        categoryIds: categoryIds.value
    }))
)

const related = computed(() => relatedData.value?.data?.related ?? [])
</script>

<template>
    <NewsArticle v-if="article" :article="article" :related="related" />
</template>
