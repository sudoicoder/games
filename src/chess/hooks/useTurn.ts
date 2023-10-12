import { useState } from "react"

import type Piece from "../services/piece/types/Piece"

import getOpposition from "../services/alliance/getOpposition"

export default function useTurn() {
  const [turn, setTurn] = useState<Piece["alliance"]>("light")

  const opposition = getOpposition(turn)

  function flipTurn() {
    setTurn(opposition)
  }

  return { turn, opposition, flipTurn } as const
}
