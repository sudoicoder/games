import { useState } from "react"

import type { Position } from "../services/getPosition"

export default function useSelectedPosition() {
  const [selectedPosition, setSelectedPosition] = useState<Position>()

  function select(position: Position) {
    return void setSelectedPosition(position)
  }

  function deselect() {
    return void setSelectedPosition(undefined)
  }

  return { selectedPosition, select, deselect } as const
}
