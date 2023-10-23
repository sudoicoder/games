import type ExecutableMove from "../services/move/types/ExecutableMove"
import type Piece from "../services/piece/types/Piece"
import type Square from "../services/square/types/Square"

import usePromotionPromptHandle from "../components/usePromotionPromptHandle"
import useAlliance from "./useAlliance"
import useBoard from "./useBoard"
import useLastMovedPiece from "./useLastMovedPiece"
import useOpponentInfluence from "./useOpponentInfluence"
import usePossibleMoves from "./usePossibleMoves"
import useSelectedPiece from "./useSelectedPiece"

function useChessGame() {
  const { board } = useBoard()
  const { alliance, flipAlliance } = useAlliance()
  const { selectedPiece, selectPiece, deselectPiece } = useSelectedPiece()
  const { lastMovedPiece, saveLastMovedPiece } = useLastMovedPiece()

  const opponentInfluence = useOpponentInfluence(board, alliance)
  const possibleMoves = usePossibleMoves(
    board,
    opponentInfluence,
    lastMovedPiece
  )

  const promotionPromptHandle = usePromotionPromptHandle()

  function getSquarePhase(square: Square) {
    if (selectedPiece === null) {
      return "default"
    }
    if (selectedPiece === square.piece) {
      return "selected"
    }
    const executableMoves = possibleMoves.get(selectedPiece)
    if (executableMoves === undefined) {
      return "default"
    }
    const executableMove = executableMoves.get(square)
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
    const clickedPiece = clicked.piece
    if (selectedPiece === clickedPiece) {
      deselectPiece()
      return
    }
    const executableMoves = possibleMoves.get(selectedPiece)
    if (executableMoves === undefined) {
      return
    }
    const executableMove = executableMoves.get(clicked)
    if (executableMove !== undefined) {
      await executeMove(selectedPiece, executableMove)
      return
    }
    if (clickedPiece === null) {
      deselectPiece()
      return
    }
    if (clickedPiece.alliance === alliance) {
      selectPiece(clickedPiece)
      return
    }
  }

  async function executeMove(
    selectedPiece: Piece,
    executableMove: ExecutableMove
  ) {
    switch (executableMove.type) {
      case "walk":
      case "capture":
      case "castle":
      case "enpassant":
        executableMove.execute()
        break
      case "promotion/walk":
      case "promotion/capture":
        const designation =
          await promotionPromptHandle.current?.promptDesignation()
        if (designation === undefined) {
          return
        }
        executableMove.execute(designation)
        break
    }
    saveLastMovedPiece(selectedPiece)
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
    alliance,
    board,
    clickSquare,
    getSquarePhase,
    promotionPromptHandle,
  }
}

export default useChessGame
