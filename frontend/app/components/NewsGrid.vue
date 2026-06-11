<script setup lang="ts">
import { useFragment, type FragmentType } from '~/gql/fragment-masking'
import { newsCardFragment } from '~/graphql/news'

const props = defineProps<{
    articles: Array<FragmentType<typeof newsCardFragment> | null>
}>()

const posts = computed(() =>
    props.articles.flatMap((masked) => {
        if (!masked) return []
        const article = useFragment(newsCardFragment, masked)
        const firstCategory = (article.categories ?? []).flatMap((c) => (c ? [c] : []))[0] ?? null
        const dateCreated = article.dateCreated as string | null | undefined

        return [
            {
                title: article.title ?? '',
                description: article.summary ?? undefined,
                image: article.heroImage?.[0]?.url ?? undefined,
                date: dateCreated ? new Date(dateCreated) : undefined,
                badge: firstCategory ? { label: firstCategory.title ?? '' } : undefined,
                to: `/news/${article.slug}`
            }
        ]
    })
)
</script>

<template>
    <UBlogPosts>
        <UBlogPost v-for="(post, index) in posts" :key="index" v-bind="post" />
    </UBlogPosts>
</template>
