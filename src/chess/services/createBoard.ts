import empty from "../utils/empty"

export type Color = "dark" | "light"

export type Category = "bishop" | "king" | "knight" | "pawn" | "queen" | "rook"

export type Piece = `${Color}:${Category}`

export type Square = Piece | typeof empty

export type Board = Square[][]

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
    Array<Square>(8).fill(empty),
    Array<Square>(8).fill(empty),
    Array<Square>(8).fill(empty),
    Array<Square>(8).fill(empty),
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
