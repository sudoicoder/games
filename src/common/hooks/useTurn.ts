import { useState } from "react"

export default function useTurn<T>(
  startWith: T,
  getNextTurn: (current: T) => T
) {
  const [turn, setTurn] = useState<T>(startWith)

  function resetTurn() {
    setTurn(startWith)
  }

  function advanceTurn() {
    setTurn(getNextTurn(turn))
  }

  return { advanceTurn, resetTurn, turn }
}
