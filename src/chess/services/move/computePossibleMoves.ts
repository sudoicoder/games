import type Board from "../board/types/Board"
import type Influence from "../influence/types/Influence"
import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type ExecutableMove from "./types/ExecutableMove"
import type PossibleMoves from "./types/PossibleMoves"

import getOpposition from "../alliance/getOpposition"
import computePossibleMovesForPiece from "./computePossibleMovesForPiece"

export default function computePossibleMoves(
  board: Board,
  opponentInfluence: Influence,
  lastMovedPiece: Nullish<Piece>
): PossibleMoves {
  const possibleMoves = new Map<Piece, ReadonlyMap<Square, ExecutableMove>>()
  const alliance = getOpposition(opponentInfluence.alliance)
  for (const piece of board.pieces[alliance]) {
    possibleMoves.set(
      piece,
      computePossibleMovesForPiece(
        board,
        piece,
        opponentInfluence,
        lastMovedPiece
      )
    )
  }
  return possibleMoves
}
