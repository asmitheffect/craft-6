<script setup lang="ts">
import { newsCategoryQuery } from '~/graphql/news'

const route = useRoute()
const slug = route.params.slug as string

const { data } = await useCraftMany(`news-category-${slug}`, newsCategoryQuery, { slug: [slug] })

const category = computed(() => {
    const entry = data.value?.data?.category
    return entry && 'title' in entry ? entry : null
})
const articles = computed(() => data.value?.data?.articles ?? [])

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
