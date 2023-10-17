import useState from "@/common/hooks/useState"

import isCountryCapitalMatched from "../services/isCountryCapitalMatched"

import useUnmatchedCountryCapitalList from "./useUnmatchedCountryCapitalList"

export default function useCountryCapitalGame() {
  const { filterOutPairFromUnmatched, resetUnmatched, unmatched } =
    useUnmatchedCountryCapitalList()
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

  function clickTile(tile: string) {
    if (clicked.length !== 1) {
      saveAsFirstTile(tile)
    } else {
      clickAsPairingTile(tile)
    }
  }

  function restartGame() {
    resetUnmatched()
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
