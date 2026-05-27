<script setup lang="ts">
import newsCategoryQuery from '@/queries/newsCategory.gql'
import type { NewsCategoryQuery } from '~~/types/graphql'
import type { NewsCategoryDetail, NewsCategoryArticle, ArticleCategory } from '@/types/news'

const route = useRoute()
const { fetchEntry } = useCraft()

const slug = route.params.slug as string

const { data, error } = await fetchEntry<{ data: NewsCategoryQuery }>(
    `news-category-${slug}`,
    newsCategoryQuery,
    { slug: [slug] }
)

if (error.value) {
    throw createError({
        statusCode: error.value.status ?? 500,
        message: JSON.stringify(error.value.data ?? error.value.message),
        fatal: true
    })
}

const category = computed(() => data.value?.data.category as NewsCategoryDetail | null | undefined)

const articles = computed(() =>
    (data.value?.data.articles ?? []).flatMap((e): NewsCategoryArticle[] => (e ? [e] : []))
)

if (!category.value) {
    throw createError({ statusCode: 404, statusMessage: 'Category not found', fatal: true })
}

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
        <UPageHeader :title="category?.title ?? ''" />
        <UBlogPosts class="mt-10">
            <UBlogPost
                v-for="(post, index) in posts"
                :key="index"
                v-bind="post"
            />
        </UBlogPosts>
    </UContainer>
</template>
