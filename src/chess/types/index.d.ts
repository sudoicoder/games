declare type Position = number
declare type Offset = number
declare type Extent = number

declare type Direction = "NORTH" | "EAST" | "SOUTH" | "WEST"
declare type Behaviour = "WALK" | "ATTACK"

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
  getKingPosition(alliance: Piece["alliance"]): Position
  getPiece(position: Position): Square["piece"]
  getSquares(): Square[]
  hasPieceMoved(piece: Piece): boolean
  movePiece(from: Position, to: Position): Square["piece"]
}
