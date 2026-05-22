export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const body = await readBody<{ query: string; variables?: Record<string, unknown> }>(event)

    return $fetch(config.public.craftApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(config.craftApiToken && { Authorization: `Bearer ${config.craftApiToken}` })
        },
        body,
        onResponseError({ response }) {
            throw createError({
                statusCode: response.status,
                statusMessage: response.statusText,
                data: response._data
            })
        }
    })
})
