import type Square from "../types/Square"

export default function getSquareNotation(
  position: Square["position"]
): Square["notation"] {
  return `${"ABCDEFGH"[position.column]}${position.row + 1}`
}
