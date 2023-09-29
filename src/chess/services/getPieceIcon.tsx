import lightBishop from "../assets/light-bishop.svg"
import lightKing from "../assets/light-king.svg"
import lightKnight from "../assets/light-knight.svg"
import lightPawn from "../assets/light-pawn.svg"
import lightQueen from "../assets/light-queen.svg"
import lightRook from "../assets/light-rook.svg"
import darkBishop from "../assets/dark-bishop.svg"
import darkKing from "../assets/dark-king.svg"
import darkKnight from "../assets/dark-knight.svg"
import darkPawn from "../assets/dark-pawn.svg"
import darkQueen from "../assets/dark-queen.svg"
import darkRook from "../assets/dark-rook.svg"
import type { Piece } from "./createBoard"

export default function getPieceIcon(piece: Piece) {
  switch (piece.category) {
    case "bishop":
      return piece.color === "light" ? lightBishop : darkBishop
    case "king":
      return piece.color === "light" ? lightKing : darkKing
    case "knight":
      return piece.color === "light" ? lightKnight : darkKnight
    case "pawn":
      return piece.color === "light" ? lightPawn : darkPawn
    case "queen":
      return piece.color === "light" ? lightQueen : darkQueen
    case "rook":
      return piece.color === "light" ? lightRook : darkRook
  }
}
