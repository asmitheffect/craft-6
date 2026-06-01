export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig(event)
    const body = await readBody<{
        query: string
        variables?: Record<string, unknown>
        operationName?: string
        draftId?: number
        canonicalId?: number
    }>(event)

    const { draftId, canonicalId, ...gqlBody } = body

    if (draftId != null) {
        gqlBody.variables = { ...gqlBody.variables, draftId, status: null, provisionalDrafts: true }
    } else if (canonicalId != null) {
        gqlBody.variables = { ...gqlBody.variables, id: canonicalId, status: null }
    } else if (config.public.draftContent) {
        gqlBody.variables = { ...gqlBody.variables, status: null }
    }

    return $fetch(config.public.craftApiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...(config.craftApiToken && { Authorization: `Bearer ${config.craftApiToken}` })
        },
        body: gqlBody,
        onResponseError({ response }) {
            throw createError({
                statusCode: response.status,
                statusMessage: response.statusText,
                data: response._data
            })
        }
    })
})
