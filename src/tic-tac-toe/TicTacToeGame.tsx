import getMarkerIcon from "./assets/getMarkerIcon"

import useTicTacToeGame from "./hooks/useTicTacToeGame"

import classes from "./tic-tac-toe-game.module.css"

function TicTacToeGame() {
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
      {grid.squares.map(row => {
        return (
          <div
            key={`${grid.squares.indexOf(row)}`}
            className={classes["row"]}
          >
            {row.map(square => {
              return (
                <button
                  key={`${square.row}-${square.column}`}
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

export default TicTacToeGame
