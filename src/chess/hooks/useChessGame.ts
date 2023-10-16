import type ExecutableMove from "../services/move/types/ExecutableMove"
import type Piece from "../services/piece/types/Piece"
import type Square from "../services/square/types/Square"

import useBoard from "./useBoard"
import useOpponentInfluence from "./useOpponentInfluence"
import usePossibleMoves from "./usePossibleMoves"
import usePromotionPrompt from "./usePromotionPrompt"
import useSelectedPiece from "./useSelectedPiece"
import useAlliance from "./useAlliance"

export default function useChessGame() {
  const { board } = useBoard()
  const { alliance, flipAlliance } = useAlliance()
  const { selectedPiece, selectPiece, deselectPiece } = useSelectedPiece()

  const opponentInfluence = useOpponentInfluence(board, alliance)
  const possibleMoves = usePossibleMoves(
    board,
    selectedPiece,
    opponentInfluence
  )

  const { PromotionPrompt, promptDesignation } = usePromotionPrompt()

  function getSquarePhase(square: Square) {
    if (selectedPiece === null) {
      return "default"
    }
    if (selectedPiece === square.piece) {
      return "selected"
    }
    const executableMove = possibleMoves.get(square)
    if (executableMove === undefined) {
      return "default"
    }
    switch (executableMove.type) {
      case "walk":
      case "castle":
      case "promotion/walk":
        return "walkable"
      case "capture":
      case "enpassant":
      case "promotion/capture":
        return "capturable"
    }
  }

  async function clickAsFirstSquare(square: Square) {
    const piece = square.piece
    if (piece === null) {
      return
    }
    if (piece.alliance !== alliance) {
      return
    }
    selectPiece(piece)
  }

  async function clickAsFollowSquare(selectedPiece: Piece, clicked: Square) {
    if (selectedPiece === clicked.piece) {
      deselectPiece()
      return
    }
    const executableMove = possibleMoves.get(clicked)
    if (executableMove !== undefined) {
      await executeMove(executableMove)
      return
    }
    const piece = clicked.piece
    if (piece === null) {
      deselectPiece()
      return
    }
    if (piece.alliance === alliance) {
      selectPiece(piece)
      return
    }
  }

  async function executeMove(executableMove: ExecutableMove) {
    switch (executableMove.type) {
      case "walk":
      case "capture":
      case "castle":
      case "enpassant":
        executableMove.execute()
        break
      case "promotion/walk":
      case "promotion/capture":
        executableMove.execute(await promptDesignation(alliance))
        break
    }
    deselectPiece()
    flipAlliance()
  }

  async function clickSquare(square: Square) {
    if (selectedPiece === null) {
      await clickAsFirstSquare(square)
    } else {
      await clickAsFollowSquare(selectedPiece, square)
    }
  }

  return {
    PromotionPrompt,
    board,
    clickSquare,
    getSquarePhase,
  } as const
}
