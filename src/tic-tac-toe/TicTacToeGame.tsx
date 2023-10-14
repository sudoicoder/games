import classes from "./styles/tic-tac-toe-game.module.css"

import getMarkerIcon from "./assets/getMarkerIcon"

import useTicTacToeGame from "./hooks/useTicTacToeGame"

export default function TicTacToeGame() {
  const {
    clickSquare,
    grid,
    isGameCompleted,
    isStrikenSquare,
    restartGame,
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
              return (
                <button
                  key={`${ci}:${square}`}
                  className={classes["square"]}
                  disabled={isGameCompleted || square.isMarked}
                  onClick={() => clickSquare(square)}
                  data-striken={isStrikenSquare(square)}
                >
                  {square.marker !== null && (
                    <img
                      key={square.marker}
                      className={classes["marker"]}
                      src={getMarkerIcon(square.marker)}
                      data-marker={square.marker}
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
