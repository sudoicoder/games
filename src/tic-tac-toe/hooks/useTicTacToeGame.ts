import type Square from "../services/square/types/Square"

import useGrid from "./useGrid"
import useMarker from "./useMarker"
import useStrike from "./useStrike"
import useWinner from "./useWinner"

function useTicTacToeGame() {
  const [marker, flipMarker, resetMarker] = useMarker()

  const { grid, resetGrid } = useGrid(3)

  const strike = useStrike(grid, marker)
  const winner = useWinner(grid, strike)

  function isStrikenSquare(square: Square) {
    return strike !== null && strike.squares.has(square)
  }

  function clickSquare(square: Square) {
    if (square.marker !== null) {
      return
    }
    square.mark(marker)
    flipMarker()
  }

  function restartGame() {
    resetGrid()
    resetMarker()
  }

  const isGameCompleted = winner !== undefined || winner === null

  return {
    clickSquare,
    grid,
    isGameCompleted,
    isStrikenSquare,
    restartGame,
    winner,
  }
}

export default useTicTacToeGame
