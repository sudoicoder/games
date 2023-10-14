import type Piece from "../piece/types/Piece"
import type Square from "./types/Square"

import getSquareNotation from "./getSquareNotation"
import getSquareShade from "./getSquareShade"

export default function createSquare(
  position: Square["position"],
  piece: Nullish<Piece>
): Square {
  function occupy(p: Piece) {
    piece = p
  }

  function vacate() {
    piece = null
  }

  return {
    notation: getSquareNotation(position),
    occupy,
    position,
    get piece() {
      return piece
    },
    shade: getSquareShade(position),
    vacate,
  }
}
