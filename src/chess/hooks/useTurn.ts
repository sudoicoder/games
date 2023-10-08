import { useState } from "react"
import getOpposition from "../services/getOpposition"

export default function useTurn() {
  const [turn, setTurn] = useState<Piece["alliance"]>("LIGHT")

  function flipTurn() {
    setTurn(getOpposition(turn))
  }

  return { turn, flipTurn } as const
}
