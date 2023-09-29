import classes from "./styles/chess-game.module.css"

import getPieceIcon from "./services/getPieceIcon"

import useChessGameState from "./hooks/useChessGameState"
import empty from "./utils/empty"

export default function ChessGame() {
  const { board, getSquarePhase, handleClick } = useChessGameState()
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
                const phase = getSquarePhase(row, col)
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
                    {piece !== empty && (
                      <img
                        className={classes["piece"]}
                        src={getPieceIcon(piece)}
                        alt={`${piece.color}/${piece.category}`}
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
