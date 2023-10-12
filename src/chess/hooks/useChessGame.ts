import type PossibleMove from "../services/move/types/PossibleMove"
import type Square from "../services/square/types/Square"

import useBoard from "./useBoard"
import useOpponentInfluence from "./useOpponentInfluence"
import useOccupiedSquares from "./useOccupiedSquares"
import usePossibleMoves from "./usePossibleMoves"
import usePromotionPrompt from "./usePromotionPrompt"
import useSelectedSquare from "./useSelectedSquare"
import useTurn from "./useTurn"

export default function useChessGame() {
  const { selectedSquare, select, deselect } = useSelectedSquare()
  const { turn, opposition, flipTurn } = useTurn()

  const board = useBoard()
  const occupiedSquares = useOccupiedSquares(board, opposition)
  const opponentInfluence = useOpponentInfluence(
    board,
    opposition,
    occupiedSquares
  )
  const possibleMoves = usePossibleMoves(
    board,
    selectedSquare,
    opponentInfluence
  )

  const { PromotionPrompt, promptDesignation } = usePromotionPrompt()

  function getSquarePhase(square: Square) {
    if (selectedSquare === null) {
      return "default"
    }
    if (selectedSquare === square) {
      return "selected"
    }
    const possibleMove = possibleMoves.find(
      ([possibleSquare]) => possibleSquare === square
    )
    if (possibleMove === undefined) {
      return "default"
    }
    switch (possibleMove[1].type) {
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
    return void select(square)
  }

  async function handleFollowClick(selected: Square, clicked: Square) {
    if (selected === clicked) {
      return void deselect()
    }
    const move = possibleMoves.find(([square]) => square === clicked)
    if (move !== undefined) {
      return await handleMove(move[1])
    }
    const piece = clicked.piece
    if (piece === null) {
      return void deselect()
    }
    if (piece.alliance === turn) {
      return void select(clicked)
    }
  }

  async function handleMove(possibleMove: PossibleMove) {
    switch (possibleMove.type) {
      case "walk":
      case "capture":
      case "castle":
      case "enpassant":
        possibleMove.execute()
        break
      case "promotion/walk":
      case "promotion/capture":
        possibleMove.execute(await promptDesignation(turn))
        break
    }
    deselect()
    flipTurn()
    return
  }

  async function handleSquareClick(square: Square) {
    if (selectedSquare === null) {
      await handleFirstClick(square)
    } else {
      await handleFollowClick(selectedSquare, square)
    }
  }

  return { board, getSquarePhase, handleSquareClick, PromotionPrompt } as const
}
