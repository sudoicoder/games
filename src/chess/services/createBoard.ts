export type Color = "light" | "dark"

export type Category = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn"

export type Piece = `${Color}/${Category}`

export type Square = Piece | null

export type Board = Square[][]

export default function createBoard(): Board {
  const board = Array<(Piece | null)[]>(8)
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
  return squares.fill(null)
}

function createRoyals(color: Color): Piece[] {
  const royals = Array<Piece>(8)
  royals[0] = `${color}/rook`
  royals[1] = `${color}/knight`
  royals[2] = `${color}/bishop`
  royals[3] = `${color}/queen`
  royals[4] = `${color}/king`
  royals[5] = `${color}/bishop`
  royals[6] = `${color}/knight`
  royals[7] = `${color}/rook`
  return royals
}

function createPawns(color: Color): Piece[] {
  return Array<Piece>(8).fill(`${color}/pawn`)
}
