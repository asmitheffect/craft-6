<script setup lang="ts">
import type { NewsArticleDetail, ArticleCategory } from '@/types/news'
import type { DynamicSection_MatrixField } from '~~/types/graphql'

const props = defineProps<{
    article: NewsArticleDetail
}>()

const categories = computed(() =>
    (props.article.categories ?? []).flatMap((c): ArticleCategory[] => (c ? [c] : []))
)

const date = computed(() =>
    props.article.dateCreated
        ? new Date(props.article.dateCreated as string).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
          })
        : null
)
</script>

<template>
    <UContainer>
        <div class="mx-auto max-w-3xl mt-10">
            <div class="mb-8 flex flex-col gap-4">
                <div class="flex flex-wrap gap-2">
                    <UBadge v-for="cat in categories" :key="cat.id ?? undefined" variant="subtle">
                        <NuxtLink :to="`/news/category/${cat.slug}`">{{ cat.title }}</NuxtLink>
                    </UBadge>
                </div>
                <h1 class="text-4xl font-bold">{{ article.title }}</h1>
                <p v-if="article.summary" class="text-lg text-gray-500">{{ article.summary }}</p>
                <time v-if="date" class="text-sm text-gray-400">{{ date }}</time>
            </div>
            <img
                v-if="article.heroImage?.[0]?.url"
                :src="article.heroImage[0].url ?? ''"
                :alt="article.heroImage[0].alt ?? ''"
                :width="article.heroImage[0].width ?? undefined"
                :height="article.heroImage[0].height ?? undefined"
                class="mb-8 w-full rounded-xl object-cover"
            />
            <CraftComponent
                v-for="block in article.dynamicSection as DynamicSection_MatrixField[]"
                :key="block.id ?? undefined"
                :data="block"
            />
        </div>
    </UContainer>
</template>
