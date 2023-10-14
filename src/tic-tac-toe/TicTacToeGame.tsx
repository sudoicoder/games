import classes from "./styles/tic-tac-toe-game.module.css"
import draw from "./utils/draw"

import useTicTacToeGameState from "./hooks/useTicTacToeGameState"
import getSymbolIcon from "./assets/getSymbolIcon"

export default function TicTacToeGame() {
  const {
    grid,
    handleClick,
    isGameCompleted,
    restartGame,
    shouldStrike,
    winner,
  } = useTicTacToeGameState()
  return (
    <div className={classes["game"]}>
      {winner !== "" && (
        <div>{winner === draw ? "Draw!" : `${winner} won!`}</div>
      )}
      {grid.map((row, ri) => {
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
                  onClick={() => handleClick(ri, ci)}
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
