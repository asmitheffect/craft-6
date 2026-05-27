<script setup lang="ts">
import type { NewsArticleCard, ArticleCategory } from '@/types/news'

const props = defineProps<{
    article: NewsArticleCard
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
    <UCard as="article" :ui="{ root: 'overflow-hidden' }" variant="solid">
        <template #header>
            <NuxtLink :to="`/news/${article.slug}`">
                <div class="aspect-video w-full bg-gray-100">
                    <img
                        v-if="article.heroImage?.[0]?.url"
                        :src="article.heroImage[0].url ?? ''"
                        :alt="article.heroImage[0].alt ?? ''"
                        class="w-full h-full object-cover transition group-hover:scale-105"
                    />
                </div>
            </NuxtLink>
        </template>

        <div class="flex flex-col gap-3">
            <div class="flex flex-wrap gap-2">
                <UBadge v-for="cat in categories" :key="cat.id ?? undefined" variant="subtle">
                    <NuxtLink :to="`/news/category/${cat.slug}`">{{ cat.title }}</NuxtLink>
                </UBadge>
            </div>
            <time v-if="date" class="text-xs text-gray-400">{{ date }}</time>
            <NuxtLink :to="`/news/${article.slug}`" class="group">
                <h3 class="text-lg font-semibold group-hover:underline">{{ article.title }}</h3>
            </NuxtLink>
            <p v-if="article.summary" class="line-clamp-3 text-sm text-gray-500">
                {{ article.summary }}
            </p>
        </div>
    </UCard>
</template>
