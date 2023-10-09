import getPosition from "../services/getPosition"
import useBoard from "./useBoard"
import usePossibleMoves from "./usePossibleMoves"
import useSelectedPosition from "./useSelectedPosition"
import useTurn from "./useTurn"

export default function useChessGame() {
  const { board, executeMove } = useBoard()
  const { selectedPosition, select, deselect } = useSelectedPosition()
  const { turn, flipTurn } = useTurn()

  const possibleMoves = usePossibleMoves(board, selectedPosition)

  function getSquarePhase(row: number, col: number): SquarePhase {
    const position = getPosition(row, col)
    if (position === null) {
      throw new Error(`${getSquarePhase.name}(): [position] is null!`)
    }
    if (selectedPosition === null) {
      return "DEFAULT"
    }
    if (selectedPosition === position) {
      return "SELECTED"
    }
    if (!possibleMoves.has(position)) {
      return "DEFAULT"
    }
    if (board.getPiece(position) === null) {
      return "MOVABLE"
    }
    return "CAPTURABLE"
  }

  function handleFirstClick(position: Position) {
    const piece = board.getPiece(position)
    if (piece === null) {
      return
    }
    if (piece.alliance !== turn) {
      return
    }
    select(position)
  }

  function handleFollowClick(selected: Position, clicked: Position) {
    if (selected === clicked) {
      return void deselect()
    }
    const move = possibleMoves.get(clicked)
    if (move !== undefined) {
      return void handleMove(move)
    }
    const piece = board.getPiece(clicked)
    if (piece === null) {
      return void deselect()
    }
    if (piece.alliance === turn) {
      return void select(clicked)
    }
  }

  function handleMove(move: Move) {
    executeMove(move)
    deselect()
    flipTurn()
    return
  }

  function handleSquareClick(row: number, col: number) {
    const position = getPosition(row, col)
    if (position === null) {
      throw new Error(`${handleSquareClick.name}(): [position] is null!`)
    }
    if (selectedPosition === null) {
      handleFirstClick(position)
    } else {
      handleFollowClick(selectedPosition, position)
    }
  }

  return { board, getSquarePhase, handleSquareClick } as const
}
