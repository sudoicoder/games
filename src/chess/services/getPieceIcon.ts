import darkBishop from "../assets/dark-bishop.svg"
import darkKing from "../assets/dark-king.svg"
import darkKnight from "../assets/dark-knight.svg"
import darkPawn from "../assets/dark-pawn.svg"
import darkQueen from "../assets/dark-queen.svg"
import darkRook from "../assets/dark-rook.svg"
import lightBishop from "../assets/light-bishop.svg"
import lightKing from "../assets/light-king.svg"
import lightKnight from "../assets/light-knight.svg"
import lightPawn from "../assets/light-pawn.svg"
import lightQueen from "../assets/light-queen.svg"
import lightRook from "../assets/light-rook.svg"

import type { Piece } from "./createBoard"

const ICONS: Record<Piece, string> = {
  "dark:bishop": darkBishop,
  "dark:king": darkKing,
  "dark:knight": darkKnight,
  "dark:pawn": darkPawn,
  "dark:queen": darkQueen,
  "dark:rook": darkRook,
  "light:bishop": lightBishop,
  "light:king": lightKing,
  "light:knight": lightKnight,
  "light:pawn": lightPawn,
  "light:queen": lightQueen,
  "light:rook": lightRook,
}

export default function getPieceIcon(piece: Piece) {
  return ICONS[piece]
}
