import { useRef, useState } from "react"

import type { TicTacToeSymbol } from "../services/getTicTacToeSymbols"
import type { TicTacToeStrike } from "../services/getTicTacToeStrike"

import createTicTacToeGrid from "../services/createTicTacToeGrid"
import getTicTacToeStrike from "../services/getTicTacToeStrike"
import markTicTacToeGridWithSymbol from "../services/markTicTacToeGrid"
import flipTicTacToeTurn from "../services/flipTicTacToeTurn"

export default function useTicTacToeGameState() {
  const [grid, setGrid] = useState(() => createTicTacToeGrid(3))
  const [strike, setStrike] = useState<TicTacToeStrike>([])

  const turn = useRef<TicTacToeSymbol>("X")

  const isGameCompleted = strike.length !== 0

  function shouldStrike(r: number, c: number) {
    return strike.some(([row, col]) => row === r && col === c)
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
    setStrike([])
    turn.current = "X"
  }

  return { grid, handleClick, isGameCompleted, restartGame, shouldStrike }
}
