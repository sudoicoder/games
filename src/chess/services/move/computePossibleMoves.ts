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

export default function computePossibleMoves(
  board: Board,
  square: Square,
  opponentInfluence: Influence
): [Square, PossibleMove][] {
  const possibleMoves: [Square, PossibleMove][] = []
  if (opponentInfluence.pinned.includes(square)) {
    return possibleMoves
  }
  const self = square.piece
  if (self === null) {
    return possibleMoves
  }
  const isUnderMultipleChecks = opponentInfluence.checking.length > 1
  const isKing = self.designation !== "king"
  if (isUnderMultipleChecks && !isKing) {
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
          possibleMoves.push([offsetted, create(self, square, offsetted)])
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
            possibleMoves.push([
              offsetted,
              createEnPassant(
                self,
                capturePiece,
                square,
                offsetted,
                captureSquare
              ),
            ])
          }
        }
        continue
      }
      if (other.alliance !== self.alliance) {
        if (behaviours.includes("attack")) {
          const create = isPromotion(self, offsetted)
            ? createPromotionCapture
            : createCapture
          possibleMoves.push([
            offsetted,
            create(self, other, square, offsetted),
          ])
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
            possibleMoves.push([
              kingTo,
              createCastle(self, other, square, kingTo, offsetted, rookTo),
            ])
          }
        }
      }
      break
    }
  }
  const isUnderCheck = opponentInfluence.checking.length > 0
  if (!isKing) {
    if (!isUnderCheck) {
      return possibleMoves
    }
    return possibleMoves.filter(([square]) => {
      return (
        opponentInfluence.checking.includes(square) ||
        opponentInfluence.controlled.some(
          ([controlledBy, squares]) =>
            opponentInfluence.checking.includes(controlledBy) &&
            squares.includes(square)
        )
      )
    })
  }
  return possibleMoves.filter(([square]) => {
    return opponentInfluence.controlled.every(([_, controlled]) => {
      return !controlled.includes(square)
    })
  })
}

function isPromotion(piece: Piece, to: Square): boolean {
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

function isEnPassant(board: Board, from: Square, to: Square): boolean {
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
