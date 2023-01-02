import algoliasearch from "algoliasearch"

const algoliaID = process.env.ALGOLIA_ID as any
const algoliaKey = process.env.ALGOLIA_KEY as any

export const algoliaClient = algoliasearch(algoliaID, algoliaKey)