<script setup lang="ts">
import { searchQuery } from '~/graphql/search'

const route = useRoute()
const router = useRouter()

const query = computed({
    get: () => (route.query.q as string) ?? '',
    set: (value: string) => router.push({ query: { q: value } })
})

const state = reactive({ query: query.value })

const { data, refresh } = await useCraftMany(
    'search',
    searchQuery,
    computed(() => ({ q: query.value }))
)

watch(query, () => {
    state.query = query.value
    refresh()
})

const submit = () => {
    query.value = state.query
}

const results = computed(() =>
    (data.value?.data?.entries ?? []).flatMap((entry) => (entry ? [entry] : []))
)
const total = computed(() => data.value?.data?.total ?? 0)
</script>

<template>
    <UContainer>
        <UPageHeader title="Search" />
        <UForm :state="state" class="mt-6 flex gap-3" @submit="submit">
            <UFormField name="query" class="flex-1">
                <UInput
                    v-model="state.query"
                    placeholder="Search…"
                    autofocus
                    size="xl"
                    class="w-full"
                />
            </UFormField>
            <UButton
                type="submit"
                size="xl"
                icon="i-lucide-search"
                :trailing="true"
                class="cursor-pointer"
            >
                Search
            </UButton>
        </UForm>
        <template v-if="query">
            <p class="mt-6 text-sm text-gray-500">
                {{ total }} result{{ total === 1 ? '' : 's' }} for <strong>{{ query }}</strong>
            </p>
            <ul v-if="results.length" class="mt-4 divide-y divide-gray-200 dark:divide-gray-800">
                <li
                    v-for="(result, index) in results"
                    :key="result.id ?? index"
                    class="flex items-center gap-4 py-3"
                >
                    <span class="w-6 shrink-0 text-right text-sm text-gray-400">
                        {{ index + 1 }}
                    </span>
                    <span class="flex-1 font-medium">{{ result.title }}</span>
                    <NuxtLink
                        v-if="result.url"
                        :to="result.url"
                        class="shrink-0 text-gray-400 hover:text-primary"
                    >
                        <UIcon name="i-lucide-arrow-up-right" class="size-5" />
                    </NuxtLink>
                </li>
            </ul>
            <p v-else class="mt-8 text-center text-sm text-gray-400">No results found.</p>
        </template>
    </UContainer>
</template>
