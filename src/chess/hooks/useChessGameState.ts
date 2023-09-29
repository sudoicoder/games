import { useRef, useState } from "react"

import type { Piece } from "../services/createBoard"
import type { ColorVariant } from "../services/getColorNotation"
import type { PossibleMove } from "../services/getPossibleMoves"

import createBoard from "../services/createBoard"
import getEmptySquare from "../services/getEmptySquare"
import getPossibleMoves from "../services/getPossibleMoves"

export default function useChessGameState() {
  const [board] = useState(createBoard)
  const [selected, setSelected] = useState<Piece | null>(null)
  const [possibleMoves, setPossibleMoves] = useState<PossibleMove[]>([])

  const turn = useRef<ColorVariant>("light")

  function getSquarePhase(row: number, col: number) {
    const piece = board[row][col]
    if (selected === piece) {
      return "selected"
    }
    if (!possibleMoves.some(([r, c]) => r === row && c === col)) {
      return "default"
    }
    if (piece !== getEmptySquare()) {
      return "capturable"
    }
    return "possible"
  }

  function handleClick(row: number, col: number) {
    const piece = board[row][col]
    if (piece === getEmptySquare()) {
      return
    }
    if (selected === piece) {
      setSelected(null)
      return
    }
    if (piece.includes(turn.current)) {
      setSelected(piece)
      setPossibleMoves(getPossibleMoves())
      return
    }
  }

  return { board, getSquarePhase, handleClick } as const
}
