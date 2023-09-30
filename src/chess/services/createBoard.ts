import type { Piece } from "./getPiece"

import getPiece from "./getPiece"

export function createBoard(): Board {
  return [
    [
      getPiece("Dark", "Rook"),
      getPiece("Dark", "Knight"),
      getPiece("Dark", "Bishop"),
      getPiece("Dark", "Queen"),
      getPiece("Dark", "King"),
      getPiece("Dark", "Bishop"),
      getPiece("Dark", "Knight"),
      getPiece("Dark", "Rook"),
    ],
    Array<Square>(8).fill(getPiece("Dark", "Pawn")),
    Array<Square>(8).fill(null),
    Array<Square>(8).fill(null),
    Array<Square>(8).fill(null),
    Array<Square>(8).fill(null),
    Array<Square>(8).fill(getPiece("Dark", "Pawn")),
    [
      getPiece("Light", "Rook"),
      getPiece("Light", "Knight"),
      getPiece("Light", "Bishop"),
      getPiece("Light", "Queen"),
      getPiece("Light", "King"),
      getPiece("Light", "Bishop"),
      getPiece("Light", "Knight"),
      getPiece("Light", "Rook"),
    ],
  ]
}

export type Square = Piece | null
export type Board = Square[][]
