import type Board from "../board/types/Board"
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
import computeIncomingAttacks from "../attacks/computeIncomingAttacks"
import getKingSquare from "../board/getKingSquare"

export default function computePossibleMoves(
  board: Board,
  square: Square
): Map<Square, PossibleMove> {
  const possibleMoves = new Map<Square, PossibleMove>()
  const self = square.piece
  if (self === null) {
    return possibleMoves
  }
  const possibleMoveStrategies = generatePossibleMoveStrategies(self)
  for (const [offset, extent, behaviours] of possibleMoveStrategies) {
    const offsetteds = generateOffsettedSquares(board, square, offset, extent)
    for (const offsetted of offsetteds) {
      const other = offsetted.piece
      if (other === null) {
        if (behaviours.includes("walk")) {
          const create = isPromotion(self, offsetted)
            ? createPromotionWalk
            : createWalk
          possibleMoves.set(offsetted, create(self, square, offsetted))
        }
        if (behaviours.includes("attack")) {
          if (isEnPassant(board, square, offsetted)) {
            const captureSquare = getSquare(board, {
              row: square.position.row,
              column: offsetted.position.column,
            })
            if (captureSquare === undefined) {
              continue
            }
            const capturePiece = captureSquare.piece
            if (capturePiece === null) {
              continue
            }
            possibleMoves.set(
              offsetted,
              createEnPassant(
                self,
                capturePiece,
                square,
                offsetted,
                captureSquare
              )
            )
          }
        }
        continue
      }
      if (other.alliance !== self.alliance) {
        if (behaviours.includes("attack")) {
          const create = isPromotion(self, offsetted)
            ? createPromotionCapture
            : createCapture
          possibleMoves.set(offsetted, create(self, other, square, offsetted))
        }
      }
      if (behaviours.includes("castle")) {
        if (self.designation === "king" && other.designation === "rook") {
          if (other.moves <= 0) {
            const rookTo = getSquare(
              board,
              getOffsettedPosition(square.position, offset)
            )!
            const kingTo = getSquare(
              board,
              getOffsettedPosition(rookTo.position, offset)
            )!
            possibleMoves.set(
              kingTo,
              createCastle(self, other, square, kingTo, offsetted, rookTo)
            )
          }
        }
      }
      break
    }
  }
  const checks = computeIncomingAttacks(
    board,
    getKingSquare(board, self.alliance)!,
    self.alliance
  )
  if (checks.length <= 0) {
    return possibleMoves
  }
  if (checks.length >= 2) {
    return self.designation === "king" ? possibleMoves : new Map()
  }
  return self.designation === "king" ? possibleMoves : possibleMoves
}

const isPromotion = (piece: Piece, to: Square): boolean => {
  if (piece.designation !== "pawn") {
    return false
  }
  if (piece.alliance === "dark" && to.position.row !== 7) {
    return false
  }
  if (piece.alliance === "light" && to.position.row !== 0) {
    return false
  }
  return true
}

const isEnPassant = (board: Board, from: Square, to: Square): boolean => {
  const fromPiece = from.piece
  if (fromPiece === null) {
    return false
  }
  if (fromPiece.designation !== "pawn") {
    return false
  }
  if (fromPiece.alliance === "dark" && from.position.row !== 4) {
    return false
  }
  if (fromPiece.alliance === "light" && from.position.row !== 3) {
    return false
  }
  const toPiece = to.piece
  if (toPiece !== null) {
    return false
  }
  const offSquare = getSquare(board, {
    row: from.position.row,
    column: to.position.column,
  })
  if (offSquare === undefined) {
    return false
  }
  const offPiece = offSquare.piece
  if (offPiece === null) {
    return false
  }
  if (offPiece.alliance === fromPiece.alliance) {
    return false
  }
  if (offPiece.designation !== "pawn") {
    return false
  }
  if (offPiece.moves !== 1) {
    return false
  }
  return true
}
