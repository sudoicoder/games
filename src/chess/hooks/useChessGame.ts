import useBoard from "./useBoard"
import usePossibleMoves from "./usePossibleMoves"
import useSelectedPosition from "./useSelectedPosition"
import useTurn from "./useTurn"

export default function useChessGame() {
  const { board, executeMove } = useBoard()
  const { selectedPosition, select, deselect } = useSelectedPosition()
  const { turn, flipTurn } = useTurn()

  const possibleMoves = usePossibleMoves(board, selectedPosition)

  function getSquarePhase(position: Position): SquarePhase {
    if (selectedPosition === -1) {
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

  function handleFirstClick(position: Position): void {
    const piece = board.getPiece(position)
    if (piece === null) {
      return
    }
    if (piece.alliance !== turn) {
      return
    }
    select(position)
  }

  function handleFollowClick(selected: Position, clicked: Position): void {
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

  function handleMove(move: Move): void {
    executeMove(move)
    deselect()
    flipTurn()
    return
  }

  function handleSquareClick(position: Position): void {
    if (selectedPosition === -1) {
      handleFirstClick(position)
    } else {
      handleFollowClick(selectedPosition, position)
    }
  }

  return { board, getSquarePhase, handleSquareClick } as const
}
