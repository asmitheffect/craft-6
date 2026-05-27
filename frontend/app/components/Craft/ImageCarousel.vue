<script setup lang="ts">
import type { ImageCarousel_Entry } from '~~/types/graphql'

const block = defineProps<Partial<ImageCarousel_Entry>>()
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
            :items="block.images"
            :ui="{ item: 'basis-[80%] sm:basis-1/2 lg:basis-1/3' }"
            class="mt-10"
        >
            <img
                v-if="item?.url"
                :src="item?.url"
                :alt="item?.alt ?? ''"
                class="aspect-square bg-gray-100 object-cover"
            />
        </UCarousel>
    </UContainer>
</template>
