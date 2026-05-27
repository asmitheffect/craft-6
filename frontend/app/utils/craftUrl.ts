export function craftEntryUrl(url: string | null | undefined): string | undefined {
    if (!url) return undefined

    try {
        const { public: { craftApiUrl } } = useRuntimeConfig()
        const parsed = new URL(url)
        const craftOrigin = new URL(craftApiUrl as string).origin

        if (parsed.origin === craftOrigin) {
            return parsed.pathname === '/' ? '/' : parsed.pathname
        }
    } catch {
        // not a valid absolute URL — treat as already relative
    }

    return url
}
