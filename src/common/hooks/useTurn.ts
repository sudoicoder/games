import { useState } from "react"

export default function useTurn<T>(
  startWith: T,
  getNextTurn: (current: T) => T
) {
  const [turn, setTurn] = useState<T>(startWith)

  function advanceTurn() {
    setTurn(getNextTurn(turn))
  }

  function resetTurn() {
    setTurn(startWith)
  }

  return [turn, advanceTurn, resetTurn] as const
}
