import type Piece from "./types/Piece"

import darkBishop from "../../assets/dark/bishop.svg"
import darkKing from "../../assets/dark/king.svg"
import darkKnight from "../../assets/dark/knight.svg"
import darkPawn from "../../assets/dark/pawn.svg"
import darkQueen from "../../assets/dark/queen.svg"
import darkRook from "../../assets/dark/rook.svg"
import lightBishop from "../../assets/light/bishop.svg"
import lightKing from "../../assets/light/king.svg"
import lightKnight from "../../assets/light/knight.svg"
import lightPawn from "../../assets/light/pawn.svg"
import lightQueen from "../../assets/light/queen.svg"
import lightRook from "../../assets/light/rook.svg"

export default function getPieceIcon(
  alliance: Piece["alliance"],
  designation: Piece["designation"]
): string {
  return pieceIcons[alliance][designation]
}

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
