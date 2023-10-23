import { useState } from "react"

import fetchSynonymsForWord from "../api/fetchSynonyms"

export default function useSynonyms(word: string) {
  const [synonyms, setSynonyms] = useState<string[]>([])

  async function fetchSynonyms() {
    setSynonyms(await fetchSynonymsForWord(word))
  }

  return { synonyms, fetchSynonyms }
}
