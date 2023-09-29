import { useRef, useState } from "react"

import type { TicTacToeSymbol } from "../services/getTicTacToeSymbols"
import type { TicTacToeStrike } from "../services/getTicTacToeStrike"

import createTicTacToeGrid from "../services/createTicTacToeGrid"
import getTicTacToeStrike from "../services/getTicTacToeStrike"
import markTicTacToeGridWithSymbol from "../services/markTicTacToeGrid"
import flipTicTacToeTurn from "../services/flipTicTacToeTurn"

import draw from "../utils/draw"

export default function useTicTacToeGameState() {
  const [grid, setGrid] = useState(() => createTicTacToeGrid(3))
  const [strike, setStrike] = useState<TicTacToeStrike | null>(null)

  const turn = useRef<TicTacToeSymbol>("X")

  function shouldStrike(r: number, c: number) {
    return (
      strike !== null && strike.some(([row, col]) => row === r && col === c)
    )
  }

  function handleClick(r: number, c: number) {
    if (grid[r][c] !== "") {
      return
    }
    const _grid = markTicTacToeGridWithSymbol(grid, r, c, turn.current)
    setGrid(_grid)
    setStrike(getTicTacToeStrike(_grid))
    turn.current = flipTicTacToeTurn(turn.current)
  }

  function restartGame() {
    setGrid(createTicTacToeGrid(3))
    setStrike(null)
    turn.current = "X"
  }

  function getWinner() {
    return strike
      ? grid[strike[0][0]][strike[0][1]]
      : grid.every(r => r.every(v => v !== ""))
      ? draw
      : ""
  }

  const winner = getWinner()

  const isGameCompleted = winner === draw || winner !== ""

  return {
    grid,
    handleClick,
    isGameCompleted,
    restartGame,
    shouldStrike,
    winner,
  } as const
}
