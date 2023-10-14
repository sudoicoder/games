import type Marker from "../marker/types/Marker"
import type Square from "./types/Square"

export default function createSquare(
  row: Square["row"],
  column: Square["column"]
): Square {
  let marker: Square["marker"] = null

  function mark(m: Marker) {
    marker = m
  }

  function reset() {
    marker = null
  }

  return {
    column,
    mark,
    marker,
    reset,
    row,
  }
}