<script setup lang="ts">
import newsCategoryQuery from '@/queries/newsCategory.gql'
import type { NewsCategoryQuery } from '~~/types/graphql'
import type { NewsCategoryDetail, NewsCategoryArticle } from '@/types/news'

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
    (data.value?.data.articles ?? []).flatMap((e): NewsCategoryArticle[] => (e ? [e] : [])).map((e) => ({
        ...e,
        dateCreated: e.dateCreated as string | null | undefined,
    }))
)

if (!category.value) {
    throw createError({ statusCode: 404, statusMessage: 'Category not found', fatal: true })
}
</script>

<template>
    <UContainer>
        <UPageHeader :title="category?.title ?? ''" />
        <NewsGrid :articles="articles" class="mt-10" />
    </UContainer>
</template>
