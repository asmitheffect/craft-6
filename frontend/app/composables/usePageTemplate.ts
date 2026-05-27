import type { EntryInterface } from '~~/types/graphql'
import PageEntry from '~/components/Templates/PageEntry.vue'

const templateMap: Record<string, Component> = {
    pageEntry: PageEntry
}

export function usePageTemplate(entry: Ref<EntryInterface | null | undefined>) {
    const templateComponent = computed(() => {
        const handle = entry.value?.typeHandle
        if (!handle || !(handle in templateMap)) return null
        return templateMap[handle]
    })

    return { templateComponent }
}
