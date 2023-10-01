import { useState } from "react"

import type { AllianceType } from "../services/getAlliance"

export default function useTurn() {
  const [turn, setTurn] = useState<AllianceType>("Light")

  function flip() {
    if (turn === "Light") {
      return void setTurn("Dark")
    }
    if (turn === "Dark") {
      return void setTurn("Light")
    }
  }

  return { turn, flip } as const
}
