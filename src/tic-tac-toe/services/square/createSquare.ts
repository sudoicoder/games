import type Marker from "../marker/types/Marker"
import type Square from "./types/Square"

function createSquare(row: Square["row"], column: Square["column"]): Square {
  let _marker: Square["marker"] = null

  function mark(marker: Marker) {
    _marker = marker
  }

  function reset() {
    _marker = null
  }

  return {
    get isMarked() {
      return _marker !== null
    },
    column,
    mark,
    get marker() {
      return _marker
    },
    reset,
    row,
  }
}

export default createSquare
