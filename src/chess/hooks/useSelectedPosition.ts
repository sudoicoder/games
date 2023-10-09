import { useState } from "react"

export default function useSelectedPosition() {
  const [selectedPosition, setSelectedPosition] = useState<Position>(-1)

  function select(position: Position) {
    return void setSelectedPosition(position)
  }

  function deselect() {
    return void setSelectedPosition(-1)
  }

  return { selectedPosition, select, deselect } as const
}
