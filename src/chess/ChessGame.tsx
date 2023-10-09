import classes from "./styles/chess-game.module.css"

import getPieceIconPath from "./services/getPieceIconPath"

import useChessGame from "./hooks/useChessGame"

export default function ChessGame() {
  const { board, getSquarePhase, handleSquareClick } = useChessGame()
  return (
    <div>
      <div className={classes["board"]}>
        {board.getSquares().map((rank, row) => {
          return rank.map((square, col) => {
            return (
              <div
                key={`${row}-${col}`}
                className={classes["square"]}
                data-shade={square.shade}
                data-phase={getSquarePhase(row, col)}
                onClick={() => handleSquareClick(row, col)}
              >
                {square.piece !== null && (
                  <img
                    key={`${row}-${col}`}
                    className={classes["piece"]}
                    src={getPieceIconPath(square.piece)}
                    alt={`${square.piece.alliance}/${square.piece.type}`}
                  />
                )}
              </div>
            )
          })
        })}
      </div>
    </div>
  )
}
