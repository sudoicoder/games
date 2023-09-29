import circle from "./assets/circle.svg"
import cross from "./assets/cross.svg"

import classes from "./styles/tic-tac-toe-game.module.css"

import useTicTacToeGameState from "./hooks/useTicTacToeGameState"
import draw from "./utils/draw"

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
    <div className={classes.game}>
      {winner !== "" && (
        <div>{winner === draw ? "Draw!" : `${winner} won!`}</div>
      )}
      {grid.map((row, ri) => {
        return (
          <div
            key={`${ri}:${row}`}
            className={classes.row}
          >
            {row.map((square, ci) => {
              const isOccupied = square !== ""
              const extraClasses = shouldStrike(ri, ci) ? classes.strike : ""
              return (
                <button
                  key={`${ci}:${square}`}
                  className={`${classes.square} ${extraClasses}`.trim()}
                  disabled={isGameCompleted || isOccupied}
                  onClick={() => handleClick(ri, ci)}
                >
                  {isOccupied && (
                    <img
                      key={square}
                      className={`${classes.symbol} ${
                        classes[`symbol-${square.toLowerCase()}`]
                      }`}
                      src={
                        square === "X" ? cross : square === "O" ? circle : ""
                      }
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
          className={classes.restart}
          onClick={restartGame}
        >
          Restart
        </button>
      )}
    </div>
  )
}
