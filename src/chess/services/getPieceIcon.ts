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

import type { Piece } from "./getPiece"

import getPiece from "./getPiece"

const ICONS = {
  [getPiece("Dark", "Bishop")]: darkBishop,
  [getPiece("Dark", "King")]: darkKing,
  [getPiece("Dark", "Knight")]: darkKnight,
  [getPiece("Dark", "Pawn")]: darkPawn,
  [getPiece("Dark", "Queen")]: darkQueen,
  [getPiece("Dark", "Rook")]: darkRook,
  [getPiece("Light", "Bishop")]: lightBishop,
  [getPiece("Light", "King")]: lightKing,
  [getPiece("Light", "Knight")]: lightKnight,
  [getPiece("Light", "Pawn")]: lightPawn,
  [getPiece("Light", "Queen")]: lightQueen,
  [getPiece("Light", "Rook")]: lightRook,
} as const

export default function getPieceIcon(piece: Piece) {
  return ICONS[piece]
}
