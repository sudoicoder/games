import type Square from "../types/Square"

export default function getSquareShade(
  position: Square["position"]
): Square["shade"] {
  return (position.row + position.column) % 2 ? "dark" : "light"
}
