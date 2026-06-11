<script setup lang="ts">
import { newsListingQuery } from '~/graphql/news'

const PER_PAGE = 3
const route = useRoute()
const router = useRouter()
const page = computed({
    get: () => Number(route.query.page ?? 1),
    set: (val) => router.push({ query: { ...route.query, page: val } })
})

const variables = ref({ limit: PER_PAGE, offset: 0 })

const { data, refresh } = await useCraftMany('news-listing', newsListingQuery, variables)

watch(page, (val) => {
    variables.value = { limit: PER_PAGE, offset: (val - 1) * PER_PAGE }
    refresh()
})

const articles = computed(() =>
    (data.value?.data?.newsEntries ?? []).flatMap((e) => (e ? [e] : []))
)

const total = computed(() => data.value?.data?.total ?? 0)
</script>

<template>
    <UContainer>
        <UPageHeader title="News" />
        <NewsGrid :articles="articles" class="mt-10" />
        <div v-if="total > PER_PAGE" class="mt-8 flex justify-center">
            <UPagination v-model:page="page" :total="total" :items-per-page="PER_PAGE" />
        </div>
    </UContainer>
</template>
