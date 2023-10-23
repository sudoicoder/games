import type Piece from "../services/piece/types/Piece"

import darkBishop from "./dark/bishop.svg"
import darkKing from "./dark/king.svg"
import darkKnight from "./dark/knight.svg"
import darkPawn from "./dark/pawn.svg"
import darkQueen from "./dark/queen.svg"
import darkRook from "./dark/rook.svg"
import lightBishop from "./light/bishop.svg"
import lightKing from "./light/king.svg"
import lightKnight from "./light/knight.svg"
import lightPawn from "./light/pawn.svg"
import lightQueen from "./light/queen.svg"
import lightRook from "./light/rook.svg"

const pieceIcons: Record<
  Piece["alliance"],
  Record<Piece["designation"], string>
> = {
  dark: {
    bishop: darkBishop,
    king: darkKing,
    knight: darkKnight,
    pawn: darkPawn,
    queen: darkQueen,
    rook: darkRook,
  },
  light: {
    bishop: lightBishop,
    king: lightKing,
    knight: lightKnight,
    pawn: lightPawn,
    queen: lightQueen,
    rook: lightRook,
  },
}

function getPieceIcon(
  alliance: Piece["alliance"],
  designation: Piece["designation"]
): string {
  return pieceIcons[alliance][designation]
}

export default getPieceIcon
