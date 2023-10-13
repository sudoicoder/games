import type Piece from "../piece/types/Piece"
import type Square from "./types/Square"

import getSquareNotation from "./getSquareNotation"
import getSquareShade from "./getSquareShade"

export default function createSquare(
  position: Square["position"],
  piece: Nullish<Piece>
): Square {
  return {
    notation: getSquareNotation(position),
    position,
    piece,
    shade: getSquareShade(position),
  }
}
