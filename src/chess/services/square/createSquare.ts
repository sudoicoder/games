import type Square from "./types/Square"
import type Piece from "../piece/types/Piece"

import getSquareNotation from "./getSquareNotation"
import getSquareShade from "./getSquareShade"

export default function createSquare(
  position: Square["position"],
  piece: Nullish<Piece>
): Square {
  return {
    position,
    notation: getSquareNotation(position),
    shade: getSquareShade(position),
    piece,
  }
}
