import { useRef, useState } from "react"

import type { TicTacToeSymbol } from "@/services/tic-tac-toe/symbols"
import type { TicTacToeStrike } from "@/services/tic-tac-toe/strike"

import createTicTacToeGrid from "@/services/tic-tac-toe/create"
import getTicTacToeStrike from "@/services/tic-tac-toe/strike"
import markTicTacToeGridWithSymbol from "@/services/tic-tac-toe/mark"
import flipTicTacToeTurn from "@/services/tic-tac-toe/flip"

export default function useTicTacToeGameState() {
  const [grid, setGrid] = useState(() => createTicTacToeGrid(3))
  const [strike, setStrike] = useState<TicTacToeStrike>([])

  const turn = useRef<TicTacToeSymbol>("X")

  function handleClick(r: number, c: number) {
    if (grid[r][c] !== "") {
      return
    }
    const _grid = markTicTacToeGridWithSymbol(grid, r, c, turn.current)
    setGrid(_grid)
    setStrike(getTicTacToeStrike(_grid))
    turn.current = flipTicTacToeTurn(turn.current)
  }

  return { grid, handleClick, strike }
}
