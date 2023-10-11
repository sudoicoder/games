declare type Position = number
declare type Offset = [number, number]
declare type Extent = number

type North = "NORTH"
type South = "SOUTH"
type East = "EAST"
type West = "WEST"
declare type Direction =
  | North
  | East
  | South
  | West
  | `${North} > ${East}`
  | `${North} > ${West}`
  | `${South} > ${East}`
  | `${South} > ${West}`
  | `${North} > ${East} > ${North}`
  | `${North} > ${East} > ${East}`
  | `${North} > ${West} > ${North}`
  | `${North} > ${West} > ${West}`
  | `${South} > ${East} > ${South}`
  | `${South} > ${East} > ${East}`
  | `${South} > ${West} > ${South}`
  | `${South} > ${West} > ${West}`

declare type Behaviour = "WALK" | "ATTACK" | "CASTLE"

declare type MoveStrategy = [Offset, Extent, Behaviour[]]
declare type AttackStrategy = [Offset, Extent, Piece["type"][]]

declare type Piece = {
  alliance: "DARK" | "LIGHT"
  type: "BISHOP" | "KING" | "KNIGHT" | "PAWN" | "QUEEN" | "ROOK"
}

declare type Square = {
  shade: "DARK" | "LIGHT"
  piece: Nullish<Piece>
}

declare type Board = {
  getCapturedPieces(): [Piece[], Piece[]]
  getKingPosition(alliance: Piece["alliance"]): Position
  getPiece(position: Position): Square["piece"]
  getSquares(): Square[]
  hasPieceMoved(piece: Piece): boolean
  movePiece(from: Position, to: Position): Square["piece"]
}

declare type SquarePhase = "DEFAULT" | "SELECTED" | "MOVABLE" | "CAPTURABLE"

declare type Move = [Position, Position][]
