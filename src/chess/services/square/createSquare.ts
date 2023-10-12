import type Square from "./types/Square"

import createInitialPiece from "../piece/createInitialPiece"
import getSquareNotation from "./getSquareNotation"
import getSquareShade from "./getSquareShade"

export default function createSquare(position: Square["position"]): Square {
  return {
    position,
    notation: getSquareNotation(position),
    shade: getSquareShade(position),
    piece: createInitialPiece(position),
  }
}
