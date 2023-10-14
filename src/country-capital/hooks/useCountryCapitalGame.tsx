import { useState } from "react"

import getRandomizedCountryCapitalList from "../services/getRandomizedCountryCapitalList"
import isCountryCapitalMatched from "../services/isCountryCapitalMatched"

export default function useCountryCapitalGame() {
  const [unmatcheds, setUnmatched] = useState(getRandomizedCountryCapitalList)
  const [clicked, setClicked] = useState<string[]>([])

  function getPhase(value: string) {
    if (clicked.includes(value)) {
      return clicked.length < 2 ? "selected" : "mismatched"
    }
    return "default"
  }

  function handleClick(current: string) {
    if (clicked.length !== 1) {
      setClicked([current])
      return
    }
    const previous = clicked[0]
    if (previous === current) {
      setClicked([])
      return
    }
    if (!isCountryCapitalMatched(previous, current)) {
      setClicked([previous, current])
      return
    }
    setClicked([])
    setUnmatched(ums => ums.filter(um => um !== previous && um !== current))
  }

  function restartGame() {
    setUnmatched(getRandomizedCountryCapitalList())
  }

  const isGameCompleted = unmatcheds.length === 0

  return {
    getPhase,
    handleClick,
    isGameCompleted,
    restartGame,
    unmatcheds,
  } as const
}
