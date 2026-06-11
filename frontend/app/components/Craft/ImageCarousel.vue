<script setup lang="ts">
import { useFragment, type FragmentType } from '~/gql/fragment-masking'
import { imageCarouselFragment } from '~/graphql/imageCarousel'

const props = defineProps<{
    data: FragmentType<typeof imageCarouselFragment>
}>()

const block = computed(() => useFragment(imageCarouselFragment, props.data))
</script>

<template>
    <UContainer>
        <UPageHeader v-if="block.title" :title="block.title" />
        <UCarousel
            v-slot="{ item }"
            loop
            arrows
            :autoplay="{ delay: 2000 }"
            wheel-gestures
            :prev="{ variant: 'solid' }"
            :next="{ variant: 'solid' }"
            :items="block.images ?? []"
            :ui="{ item: 'basis-[80%] sm:basis-1/2 lg:basis-1/3' }"
            class="mt-10"
        >
            <img
                v-if="item?.url"
                :src="item?.url"
                :alt="item?.title ?? ''"
                class="aspect-square bg-gray-100 object-cover"
            />
        </UCarousel>
    </UContainer>
</template>
