import type { Alliance } from "./getAlliance"
import type { Piece } from "./getPiece"

import getAlliance from "./getAlliance"

export default function getPieceAlliance(piece: Piece): Alliance {
  return piece.includes(getAlliance("Dark"))
    ? getAlliance("Dark")
    : getAlliance("Light")
}
