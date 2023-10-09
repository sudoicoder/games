import useBoard from "./useBoard"
import usePossibleMoves from "./usePossibleMoves"
import useSelectedPosition from "./useSelectedPosition"
import useTurn from "./useTurn"

export default function useChessGame() {
  const { board, move, capture } = useBoard()
  const { selectedPosition, select, deselect } = useSelectedPosition()
  const { turn, flipTurn } = useTurn()

  const possibleMoves = usePossibleMoves(board, selectedPosition)

  function getPhase(position: Position) {
    if (selectedPosition === -1) {
      return "default"
    }
    if (selectedPosition === position) {
      return "selected"
    }
    if (possibleMoves.has(position)) {
      return board.getPiece(position) !== null ? "capturable" : "possible"
    }
    return "default"
  }

  function handleClick(position: Position) {
    const piece = board.getPiece(position)
    if (selectedPosition === -1) {
      if (piece === null) {
        return
      }
      if (piece.alliance !== turn) {
        return
      }
      return void select(position)
    }
    if (selectedPosition === position) {
      return void deselect()
    }
    if (!possibleMoves.has(position)) {
      return void deselect()
    }
    if (piece === null) {
      move(selectedPosition, position)
    } else {
      capture(selectedPosition, position)
    }
    flipTurn()
    return
  }

  return { board, getPhase, handleClick } as const
}
