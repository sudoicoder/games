import type { Board } from "./createBoard"
import type { Alliance } from "./getAlliance"
import type { Position } from "./getOffsetedPosition"
import type { Direction } from "./getStepsAlong"

import getAlliance from "./getAlliance"
import getOffsetedPosition from "./getOffsetedPosition"
import getPieceAlliance from "./getPieceAlliance"
import getPieceNotation from "./getPieceNotation"
import getStepsAlong from "./getStepsAlong"

export default function getPossibleMoves(
  board: Board,
  position: Position
): PossibleMove[] {
  const piece = board[position[0]][position[1]]
  if (piece === null) {
    return []
  }
  const alliance = getPieceAlliance(piece)
  if (piece.includes(getPieceNotation("Bishop"))) {
    return getPossibleMovesForBishop(board, position, alliance)
  }
  if (piece.includes(getPieceNotation("Rook"))) {
    return getPossibleMovesForRook(board, position, alliance)
  }
  if (piece.includes(getPieceNotation("Knight"))) {
    return getPossibleMovesForKnight(board, position, alliance)
  }
  if (piece.includes(getPieceNotation("Queen"))) {
    return getPossibleMovesForQueen(board, position, alliance)
  }
  if (piece.includes(getPieceNotation("King"))) {
    return getPossibleMovesForKing(board, position, alliance)
  }
  if (piece.includes(getPieceNotation("Pawn"))) {
    return getPossibleMovesForPawn(board, position, alliance)
  }
  return []
}

function getPossibleMovesForPawn(
  board: Board,
  position: Position,
  alliance: Alliance
) {
  const isDark = alliance === getAlliance("Dark")
  const isIdle = isDark ? position[0] === 1 : position[0] === 6
  return [
    ..._getPossibleMoves(
      board,
      position,
      alliance,
      isDark ? ["South"] : ["North"],
      ["Walk"],
      isIdle ? 2 : 1
    ),
    ..._getPossibleMoves(
      board,
      position,
      alliance,
      isDark
        ? ["South > East", "South > West"]
        : ["North > East", "North > West"],
      ["Attack"],
      1
    ),
  ]
}

function getPossibleMovesForKing(
  board: Board,
  position: Position,
  alliance: Alliance
) {
  return getPossibleMovesForQueen(board, position, alliance, 1)
}

function getPossibleMovesForQueen(
  board: Board,
  position: Position,
  alliance: Alliance,
  extent: number = Number.POSITIVE_INFINITY
) {
  return [
    ...getPossibleMovesForRook(board, position, alliance, extent),
    ...getPossibleMovesForBishop(board, position, alliance, extent),
  ]
}

function getPossibleMovesForRook(
  board: Board,
  position: Position,
  alliance: Alliance,
  extent: number = Number.POSITIVE_INFINITY
) {
  return _getPossibleMoves(
    board,
    position,
    alliance,
    ["North", "East", "South", "West"],
    ["Attack", "Walk"],
    extent
  )
}

function getPossibleMovesForBishop(
  board: Board,
  position: Position,
  alliance: Alliance,
  extent: number = Number.POSITIVE_INFINITY
) {
  return _getPossibleMoves(
    board,
    position,
    alliance,
    ["North > East", "North > West", "South > East", "South > West"],
    ["Attack", "Walk"],
    extent
  )
}

function getPossibleMovesForKnight(
  board: Board,
  position: Position,
  alliance: Alliance
) {
  return _getPossibleMoves(
    board,
    position,
    alliance,
    [
      "North > East > East",
      "North > North > East",
      "North > North > West",
      "North > West > West",
      "South > East > East",
      "South > South > East",
      "South > South > West",
      "South > West > West",
    ],
    ["Attack", "Walk"],
    1
  )
}

export function _getPossibleMoves(
  board: Board,
  position: Position,
  alliance: Alliance,
  directions: Direction[],
  behaviors: ("Walk" | "Attack")[],
  extent: number = Number.POSITIVE_INFINITY
): PossibleMove[] {
  const moves = Array<PossibleMove>()
  for (const direction of directions) {
    const steps = getStepsAlong(direction)
    let offsetted: Position | null = position
    while ((offsetted = getOffsetedPosition(offsetted, steps))) {
      if (moves.length === extent) {
        break
      }
      const other = board[offsetted[0]][offsetted[1]]
      if (other === null) {
        if (behaviors.includes("Walk")) {
          moves.push(offsetted)
        }
        continue
      }
      if (!other.includes(alliance)) {
        if (behaviors.includes("Attack")) {
          moves.push(offsetted)
        }
      }
      break
    }
  }
  return moves
}

export type PossibleMove = [number, number]
