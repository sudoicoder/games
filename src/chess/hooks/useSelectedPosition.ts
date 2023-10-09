import { useState } from "react"

export default function useSelectedPosition() {
  const [selectedPosition, setSelectedPosition] =
    useState<Nullish<Position>>(null)

  function select(position: Position) {
    return void setSelectedPosition(position)
  }

  function deselect() {
    return void setSelectedPosition(null)
  }

  return { selectedPosition, select, deselect } as const
}
