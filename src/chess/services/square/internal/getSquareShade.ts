import type Square from "../types/Square"

function getSquareShade(position: Square["position"]): Square["shade"] {
  return (position.row + position.column) % 2 ? "dark" : "light"
}

export default getSquareShade
