import type Square from "../types/Square"

function getSquareNotation(position: Square["position"]): Square["notation"] {
  return `${"ABCDEFGH"[position.column]}${position.row + 1}`
}

export default getSquareNotation
