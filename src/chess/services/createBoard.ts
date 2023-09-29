import empty from "../utils/empty"

export type Color = "dark" | "light"

export type Category = "bishop" | "king" | "knight" | "pawn" | "queen" | "rook"

export type Piece = {
  category: Category
  color: Color
}

export type Square = Piece | typeof empty

export type Board = Square[][]

export default function createBoard(): Board {
  const board = Array<Square[]>(8)
  for (let rank = 0; rank < board.length; rank++) {
    board[rank] = createRank(rank)
  }
  return board
}

function createRank(rank: number): Square[] {
  const squares = Array<Square>(8)
  if (rank === 0) {
    return createRoyals("dark")
  }
  if (rank === 1) {
    return createPawns("dark")
  }
  if (rank === 6) {
    return createPawns("light")
  }
  if (rank === 7) {
    return createRoyals("light")
  }
  return squares.fill(empty)
}

function createRoyals(color: Color): Piece[] {
  const royals = Array<Piece>(8)
  royals[0] = { category: "rook", color }
  royals[1] = { category: "knight", color }
  royals[2] = { category: "bishop", color }
  royals[3] = { category: "queen", color }
  royals[4] = { category: "king", color }
  royals[5] = { category: "bishop", color }
  royals[6] = { category: "knight", color }
  royals[7] = { category: "rook", color }
  return royals
}

function createPawns(color: Color): Piece[] {
  const pawns = Array<Piece>(8)
  for (let file = 0; file < pawns.length; file++) {
    pawns[file] = { category: "pawn", color }
  }
  return pawns
}
