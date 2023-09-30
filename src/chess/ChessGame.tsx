import classes from "./styles/chess-game.module.css"

import getPieceIcon from "./services/getPieceIcon"

import useChessGame from "./hooks/useChessGame"

export default function ChessGame() {
  const { board, getPhase, handleClick } = useChessGame()
  return (
    <div>
      <div className={classes["board"]}>
        {board.map((rank, row) => {
          return (
            <div
              key={row}
              className={classes["rank"]}
            >
              {rank.map((piece, col) => {
                const phase = getPhase(row, col)
                const extraClass =
                  phase !== "default"
                    ? classes[`square-${phase}`]
                    : (row + col) % 2
                    ? classes["square-light"]
                    : classes["square-dark"]
                return (
                  <div
                    key={col}
                    className={[classes["square"], extraClass].join(" ")}
                    onClick={() => handleClick(row, col)}
                  >
                    {piece !== null && (
                      <img
                        className={classes["piece"]}
                        src={getPieceIcon(piece)}
                        alt={piece}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
