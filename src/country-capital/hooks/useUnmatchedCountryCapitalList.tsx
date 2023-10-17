import { useState } from "react"
import getRandomizedCountryCapitalList from "../services/getRandomizedCountryCapitalList"

export default function useUnmatchedCountryCapitalList() {
  const [unmatched, setUnmatched] = useState(getRandomizedCountryCapitalList)

  function resetUnmatched() {
    setUnmatched(getRandomizedCountryCapitalList())
  }

  function filterOutPairFromUnmatched(x: string, y: string) {
    setUnmatched(um => um.filter(p => p !== x && p !== y))
  }

  return { unmatched, resetUnmatched, filterOutPairFromUnmatched }
}
