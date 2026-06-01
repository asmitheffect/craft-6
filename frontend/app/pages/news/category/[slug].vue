<script setup lang="ts">
import newsCategoryQuery from '@/queries/newsCategory.gql'
import type { NewsCategoryQuery } from '~~/types/graphql'
import type { NewsCategoryDetail, NewsCategoryArticle } from '@/types/news'

const route = useRoute()
const slug = route.params.slug as string

const { data } = await useCraftMany<{ data: NewsCategoryQuery }>(
    `news-category-${slug}`,
    newsCategoryQuery,
    { slug: [slug] }
)

const category = computed(() => data.value?.data?.category as NewsCategoryDetail | null | undefined)

const articles = computed(() =>
    (data.value?.data?.articles ?? []).flatMap((e): NewsCategoryArticle[] => (e ? [e] : [])).map((e) => ({
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
