import type { ColorNotation } from "./getColorNotation"
import type { EmptySquare } from "./getEmptySquare"
import type { PieceNotation } from "./getPieceNotation"

import getEmpty from "./getEmptySquare"

export default function createBoard(): Board {
  return [
    [
      "dark:rook",
      "dark:knight",
      "dark:bishop",
      "dark:queen",
      "dark:king",
      "dark:bishop",
      "dark:knight",
      "dark:rook",
    ],
    Array<Square>(8).fill("dark:pawn"),
    Array<Square>(8).fill(getEmpty()),
    Array<Square>(8).fill(getEmpty()),
    Array<Square>(8).fill(getEmpty()),
    Array<Square>(8).fill(getEmpty()),
    Array<Square>(8).fill("light:pawn"),
    [
      "light:rook",
      "light:knight",
      "light:bishop",
      "light:queen",
      "light:king",
      "light:bishop",
      "light:knight",
      "light:rook",
    ],
  ]
}

export type Piece = `${ColorNotation}:${PieceNotation}`
export type Square = Piece | EmptySquare
export type Board = Square[][]
