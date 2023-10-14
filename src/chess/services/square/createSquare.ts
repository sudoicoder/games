import type Piece from "../piece/types/Piece"
import type Square from "./types/Square"

import getSquareNotation from "./getSquareNotation"
import getSquareShade from "./getSquareShade"

export default function createSquare(
  position: Square["position"],
  piece: Nullish<Piece>
): Square {
  const notation = getSquareNotation(position)
  const shade = getSquareShade(position)

  function occupy(p: Piece) {
    piece = p
  }

  function vacate() {
    piece = null
  }

  return {
    notation,
    position,
    shade,
    get piece() {
      return piece
    },
    occupy,
    vacate,
  }
}
