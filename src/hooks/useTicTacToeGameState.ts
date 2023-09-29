import { useRef, useState } from "react"

import type { TicTacToeSymbol } from "@/services/tic-tac-toe/getTicTacToeSymbols"
import type { TicTacToeStrike } from "@/services/tic-tac-toe/getTicTacToeStrike"

import createTicTacToeGrid from "@/services/tic-tac-toe/createTicTacToeGrid"
import getTicTacToeStrike from "@/services/tic-tac-toe/getTicTacToeStrike"
import markTicTacToeGridWithSymbol from "@/services/tic-tac-toe/markTicTacToeGrid"
import flipTicTacToeTurn from "@/services/tic-tac-toe/flipTicTacToeTurn"

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
