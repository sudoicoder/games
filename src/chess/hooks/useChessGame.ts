import type ExecutableMove from "../services/move/types/ExecutableMove"
import Piece from "../services/piece/types/Piece"
import type Square from "../services/square/types/Square"

import useBoard from "./useBoard"
import useOpponentInfluence from "./useOpponentInfluence"
import usePossibleMoves from "./usePossibleMoves"
import usePromotionPrompt from "./usePromotionPrompt"
import useSelectedPiece from "./useSelectedPiece"
import useTurn from "./useTurn"

export default function useChessGame() {
  const { selectedPiece, select, deselect } = useSelectedPiece()
  const { turn, opposition, flipTurn } = useTurn()

  const board = useBoard()
  const opponentInfluence = useOpponentInfluence(board, opposition)
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

  async function handleFirstClick(square: Square) {
    const piece = square.piece
    if (piece === null) {
      return
    }
    if (piece.alliance !== turn) {
      return
    }
    return void select(piece)
  }

  async function handleFollowClick(selectedPiece: Piece, clicked: Square) {
    if (selectedPiece === clicked.piece) {
      return void deselect()
    }
    const executableMove = possibleMoves.get(clicked)
    if (executableMove !== undefined) {
      return await executeMove(executableMove)
    }
    const piece = clicked.piece
    if (piece === null) {
      return void deselect()
    }
    if (piece.alliance === turn) {
      return void select(piece)
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
        executableMove.execute(await promptDesignation(turn))
        break
    }
    deselect()
    flipTurn()
    return
  }

  async function handleSquareClick(square: Square) {
    if (selectedPiece === null) {
      await handleFirstClick(square)
    } else {
      await handleFollowClick(selectedPiece, square)
    }
  }

  return { board, getSquarePhase, handleSquareClick, PromotionPrompt } as const
}
