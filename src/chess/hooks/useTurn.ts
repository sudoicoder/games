import { useRef } from "react"

import type { AllianceType } from "../services/getAlliance"

export default function useTurn() {
  const turn = useRef<AllianceType>("Light")

  function flip() {
    if (turn.current === "Light") {
      turn.current = "Dark"
    }
    if (turn.current === "Dark") {
      turn.current = "Light"
    }
  }

  return { turn: turn.current, flip } as const
}
