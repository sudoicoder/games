import getAlliance from "../services/getAlliance"
import getPosition from "../services/getPosition"

import useTurn from "./useTurn"
import usePossibleMoves from "./usePossibleMoves"
import useSelectedPosition from "./useSelectedPosition"
import useBoard from "./useBoard"

export default function useChess() {
  const { board, move, capture } = useBoard()
  const { selectedPosition, select, deselect } = useSelectedPosition()
  const { turn, flip } = useTurn()

  const possibleMoves = usePossibleMoves(board, selectedPosition)

  function getPhase(row: number, col: number) {
    if (selectedPosition === undefined) {
      return "default"
    }
    const position = getPosition(row, col)
    if (selectedPosition === position) {
      return "selected"
    }
    if (possibleMoves.includes(position)) {
      return board[row][col] !== null ? "capturable" : "possible"
    }
    return "default"
  }

  function handleClick(row: number, col: number) {
    const position = getPosition(row, col)
    const piece = board[row][col]
    if (selectedPosition === undefined) {
      if (piece !== null) {
        if (piece.includes(getAlliance(turn))) {
          select(position)
        }
      }
      return
    }
    if (selectedPosition === position) {
      return void deselect()
    }
    if (!possibleMoves.includes(position)) {
      return void deselect()
    }
    if (piece === null) {
      move(selectedPosition, position)
      flip()
      return
    }
    capture(selectedPosition, position)
    flip()
    return
  }

  return { board, getPhase, handleClick } as const
}
