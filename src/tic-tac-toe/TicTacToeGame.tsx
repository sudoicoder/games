import classes from "./styles/tic-tac-toe-game.module.css"
import draw from "./utils/draw"

import getSymbolIcon from "./assets/getSymbolIcon"

import useTicTacToeGame from "./hooks/useTicTacToeGame"

export default function TicTacToeGame() {
  const {
    clickSquare,
    grid,
    isGameCompleted,
    restartGame,
    shouldStrike,
    winner,
  } = useTicTacToeGame()
  return (
    <div className={classes["game"]}>
      {isGameCompleted && (
        <div>{winner === null ? "Draw!" : `${winner} won!`}</div>
      )}
      {grid.squares.map((row, ri) => {
        return (
          <div
            key={`${ri}:${row}`}
            className={classes["row"]}
          >
            {row.map((square, ci) => {
              const isOccupied = square !== ""
              return (
                <button
                  key={`${ci}:${square}`}
                  className={classes["square"]}
                  disabled={isGameCompleted || isOccupied}
                  onClick={() => clickSquare(ri, ci)}
                  data-strike={shouldStrike(ri, ci)}
                >
                  {isOccupied && (
                    <img
                      key={square}
                      className={classes["symbol"]}
                      src={getSymbolIcon(square)}
                      data-symbol={square}
                    />
                  )}
                </button>
              )
            })}
          </div>
        )
      })}
      {isGameCompleted && (
        <button
          className={classes["restart"]}
          onClick={restartGame}
        >
          Restart
        </button>
      )}
    </div>
  )
}
