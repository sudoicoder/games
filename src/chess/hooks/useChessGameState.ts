import { useMemo, useRef, useState } from "react"

import type { AllianceType } from "../services/getAlliance"
import type { Position } from "../services/getPosition"

import createBoard, { Board } from "../services/createBoard"
import getAlliance from "../services/getAlliance"
import getPosition from "../services/getPosition"
import getPossibleMoves from "../services/getPossibleMoves"

export default function useChessGameState() {
  const { board, move, capture } = useBoard()
  const { selectedPosition, select, deselect } = useSelectedPosition()
  const { turn, flip } = useTurn()

  const { possibleMoves } = usePossibleMoves(board, selectedPosition)

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

function useBoard() {
  const [board] = useState(createBoard)

  function move(from: Position, to: Position) {
    board[to[0]][to[1]] = board[from[0]][from[1]]
    board[from[0]][from[1]] = null
  }

  function capture(from: Position, to: Position) {
    const capturing = board[to[0]][to[1]]
    move(from, to)
    return capturing
  }

  return { board, move, capture } as const
}

function useSelectedPosition() {
  const [selectedPosition, setSelectedPosition] = useState<Position>()

  function select(position: Position) {
    return void setSelectedPosition(position)
  }

  function deselect() {
    return void setSelectedPosition(undefined)
  }

  return { selectedPosition, select, deselect } as const
}

function usePossibleMoves(
  board: Board,
  selectedPosition: Position | undefined
) {
  const possibleMoves = useMemo(
    () => (selectedPosition ? getPossibleMoves(board, selectedPosition) : []),
    [board, selectedPosition]
  )
  return { possibleMoves } as const
}

function useTurn() {
  const turn = useRef<AllianceType>("Light")

  function flip() {
    if (turn.current === "Light") {
      turn.current = "Dark"
    }
    if (turn.current === "Dark") {
      turn.current = "Light"
    }
  }

  return { turn: turn.current, flip } as const
}
