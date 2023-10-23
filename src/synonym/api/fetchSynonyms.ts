const API_BASE_URL = "https://api.datamuse.com"

type SynonymResponse = {
  word: string
  score: number
}

function createUrlToFetchSynonyms(word: string) {
  const url = new URL("/words", API_BASE_URL)
  url.searchParams.set("rel_syn", word)
  return url
}

function orderDescendingByScore(
  first: SynonymResponse,
  second: SynonymResponse
) {
  return second.score - first.score
}

async function fetchSynonyms(word: string) {
  const url = createUrlToFetchSynonyms(word)
  const response = await fetch(url)
  const synonyms = (await response.json()) as SynonymResponse[]
  synonyms.sort(orderDescendingByScore)
  return synonyms.map(synonym => synonym.word)
}

export default fetchSynonyms
