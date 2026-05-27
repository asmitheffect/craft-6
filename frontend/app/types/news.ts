import type { NewsListingQuery, NewsArticleQuery, NewsCategoryQuery } from '~~/types/graphql'

type UnwrapArray<T> = T extends Array<infer U> ? U : never

export type NewsArticleCard = NonNullable<UnwrapArray<NewsListingQuery['newsEntries']>>
export type NewsArticleDetail = NonNullable<NonNullable<NewsArticleQuery['entry']>>
export type NewsCategoryDetail = NonNullable<NonNullable<NewsCategoryQuery['category']>>
export type NewsCategoryArticle = NonNullable<UnwrapArray<NewsCategoryQuery['articles']>>
export type ArticleCategory = NonNullable<UnwrapArray<NewsArticleCard['categories']>>
