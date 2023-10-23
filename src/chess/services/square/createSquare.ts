import type Piece from "../piece/types/Piece"
import type Square from "./types/Square"

import getSquareNotation from "./internal/getSquareNotation"
import getSquareShade from "./internal/getSquareShade"

function createSquare(position: Square["position"]): Square {
  const notation = getSquareNotation(position)
  const shade = getSquareShade(position)

  let _piece: Nullish<Piece> = null

  function occupy(piece: Piece) {
    _piece = piece
  }

  function vacate() {
    _piece = null
  }

  return {
    notation,
    position,
    shade,
    get piece() {
      return _piece
    },
    occupy,
    vacate,
  }
}

export default createSquare
