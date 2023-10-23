import { useEffect, useState } from "react"

import fetchSynonymsForWord from "../api/fetchSynonyms"

function useSynonyms(word: string) {
  const [synonyms, setSynonyms] = useState<string[]>()
  const [isFetchingSynonyms, setIsFetchingSynonyms] = useState(false)

  async function fetchSynonyms() {
    if (synonyms !== undefined) {
      return
    }
    setIsFetchingSynonyms(true)
    try {
      setSynonyms(await fetchSynonymsForWord(word))
    } finally {
      setIsFetchingSynonyms(false)
    }
  }

  useEffect(() => setSynonyms(undefined), [word])

  return { synonyms, isFetchingSynonyms, fetchSynonyms }
}

export default useSynonyms
