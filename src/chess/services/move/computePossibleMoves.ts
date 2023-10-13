import type Board from "../board/types/Board"
import type Influence from "../influence/types/Influence"
import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type PossibleMove from "./types/PossibleMove"

import getSquare from "../board/getSquare"
import generateOffsettedSquares from "../offset/generateOffsettedSquares"
import getOffsettedPosition from "../position/getOffsettedPosition"
import createCapture from "./createCapture"
import createCastle from "./createCastle"
import createEnPassant from "./createEnPassant"
import createPromotionCapture from "./createPromotionCapture"
import createPromotionWalk from "./createPromotionWalk"
import createWalk from "./createWalk"
import generatePossibleMoveStrategies from "./generatePossibleMoveStrategies"
import isEnPassant from "./isEnPassant"
import isPromotion from "./isPromotion"

export default function computePossibleMoves(
  board: Board,
  piece: Piece,
  opponentInfluence: Influence
): Map<Square, PossibleMove> {
  const possibleMoves = new Map<Square, PossibleMove>()
  const square = piece.square
  if (square === null) {
    return possibleMoves
  }
  if (opponentInfluence.pins.has(piece)) {
    return possibleMoves
  }
  const isUnderMultipleChecks = opponentInfluence.checks.size > 1
  const isKing = piece.designation === "king"
  if (isUnderMultipleChecks && !isKing) {
    return possibleMoves
  }
  const possibleMoveStrategies = generatePossibleMoveStrategies(piece)
  for (const [offset, extent, behaviours] of possibleMoveStrategies) {
    const offsetteds = generateOffsettedSquares(board, square, offset, extent)
    for (const offsetted of offsetteds) {
      const other = offsetted.piece
      if (other === null) {
        if (behaviours.includes("walk")) {
          const create = isPromotion(piece, offsetted)
            ? createPromotionWalk
            : createWalk
          const possible = create(piece, square, offsetted)
          possibleMoves.set(offsetted, possible)
        }
        if (behaviours.includes("attack")) {
          if (isEnPassant(board, square, offsetted)) {
            const captureSquare = getSquare(board, {
              row: square.position.row,
              column: offsetted.position.column,
            })!
            const capturePiece = captureSquare.piece!
            const possible = createEnPassant(
              piece,
              capturePiece,
              square,
              offsetted,
              captureSquare
            )
            possibleMoves.set(offsetted, possible)
          }
        }
        continue
      }
      if (other.alliance !== piece.alliance) {
        if (behaviours.includes("attack")) {
          const create = isPromotion(piece, offsetted)
            ? createPromotionCapture
            : createCapture
          const possible = create(piece, other, square, offsetted)
          possibleMoves.set(offsetted, possible)
        }
      }
      if (behaviours.includes("castle")) {
        if (piece.designation === "king" && other.designation === "rook") {
          if (other.moves <= 0) {
            const rookTo = getSquare(
              board,
              getOffsettedPosition(square.position, offset)
            )!
            const kingTo = getSquare(
              board,
              getOffsettedPosition(rookTo.position, offset)
            )!
            const possible = createCastle(
              piece,
              other,
              square,
              kingTo,
              offsetted,
              rookTo
            )
            possibleMoves.set(kingTo, possible)
          }
        }
      }
      break
    }
  }
  const isUnderCheck = opponentInfluence.checks.size > 0
  if (!isKing) {
    if (!isUnderCheck) {
      return possibleMoves
    }
    for (const square of possibleMoves.keys()) {
      for (const [checking, through] of opponentInfluence.checks) {
        if (square.piece !== checking && !through.has(square)) {
          possibleMoves.delete(square)
        }
      }
    }
    return possibleMoves
  }
  for (const square of possibleMoves.keys()) {
    for (const controlled of opponentInfluence.controls.values()) {
      if (controlled.has(square)) {
        possibleMoves.delete(square)
      }
    }
  }
  return possibleMoves
}
