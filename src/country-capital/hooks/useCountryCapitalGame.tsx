import { useState } from "react"

import getRandomizedCountryCapitalList from "../services/getRandomizedCountryCapitalList"
import isCountryCapitalMatched from "../services/isCountryCapitalMatched"

export default function useCountryCapitalGame() {
  const [unmatched, setUnmatched] = useState(getRandomizedCountryCapitalList)
  const [clicked, setClicked] = useState<string[]>([])

  function getTilePhase(value: string) {
    if (!clicked.includes(value)) {
      return "default"
    }
    if (clicked.length > 1) {
      return "mismatched"
    }
    return "selected"
  }

  function resetClicked() {
    setClicked([])
  }

  function saveAsFirstTile(tile: string) {
    setClicked([tile])
  }

  function saveAsMismatch(previous: string, current: string) {
    setClicked([previous, current])
  }

  function clickAsPairingTile(current: string) {
    const previous = clicked[0]
    if (previous !== current) {
      checkForMatching(previous, current)
    } else {
      resetClicked()
    }
  }

  function checkForMatching(previous: string, current: string) {
    if (isCountryCapitalMatched(previous, current)) {
      filterOutPairFromUnmatched(previous, current)
      resetClicked()
    } else {
      saveAsMismatch(previous, current)
    }
  }

  function filterOutPairFromUnmatched(previous: string, current: string) {
    setUnmatched(um => um.filter(t => t !== previous && t !== current))
  }

  function clickTile(tile: string) {
    if (clicked.length !== 1) {
      saveAsFirstTile(tile)
    } else {
      clickAsPairingTile(tile)
    }
  }

  function restartGame() {
    setUnmatched(getRandomizedCountryCapitalList())
  }

  const isGameCompleted = unmatched.length === 0

  return {
    getTilePhase,
    clickTile,
    isGameCompleted,
    restartGame,
    unmatched,
  } as const
}
