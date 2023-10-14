import { useState } from "react"

export default function useTurn<T>(
  startWith: T,
  getNextTurn: (current: T) => T
) {
  const [_turn, setTurn] = useState<T>(startWith)

  const turn = () => _turn

  turn.reset = () => setTurn(startWith)

  turn.advance = () => setTurn(getNextTurn(_turn))

  return turn
}
