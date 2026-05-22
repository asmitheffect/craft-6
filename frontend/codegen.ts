/// <reference types="node" />
import 'dotenv/config'
import type { CodegenConfig } from '@graphql-codegen/cli'

export default {
    schema: {
        [process.env.CRAFT_API_URL as string]: {
            headers: {
                Authorization: `Bearer ${process.env.CRAFT_API_TOKEN}`
            }
        }
    },
    documents: ['app/**/*.vue', 'app/**/*.gql'],
    ignoreNoDocuments: true,
    generates: {
        'types/graphql.ts': {
            plugins: ['typescript', 'typescript-operations']
        }
    }
} satisfies CodegenConfig
