import { useRef, useState } from "react"

import type { Piece, Color } from "../services/createBoard"
import createBoard from "../services/createBoard"
import empty from "../utils/empty"
import getPossibleMoves, { PossibleMove } from "../services/getPossibleMoves"

export default function useChessGameState() {
  const [board] = useState(createBoard)
  const [selected, setSelected] = useState<Piece | null>(null)
  const [possibleMoves, setPossibleMoves] = useState<PossibleMove[]>([])

  const turn = useRef<Color>("light")

  function getSquarePhase(row: number, col: number) {
    const piece = board[row][col]
    if (selected === piece) {
      return "selected"
    }
    if (!possibleMoves.some(([r, c]) => r === row && c === col)) {
      return "default"
    }
    if (piece !== empty) {
      return "capturable"
    }
    return "possible"
  }

  function handleClick(row: number, col: number) {
    const piece = board[row][col]
    if (piece === empty) {
      return
    }
    if (selected === piece) {
      setSelected(null)
      return
    }
    if (piece.color === turn.current) {
      setSelected(piece)
      setPossibleMoves(getPossibleMoves(board, row, col))
      return
    }
  }

  return { board, getSquarePhase, handleClick } as const
}
