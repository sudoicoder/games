import classes from "./styles/chess-game.module.css"

import getPieceIconPath from "./services/getPieceIcon"

import useChessGame from "./hooks/useChessGame"

export default function ChessGame() {
  const { board, getPhase, handleClick } = useChessGame()
  return (
    <div>
      <div className={classes["board"]}>
        {board.getSquares().map((square, position) => {
          return (
            <div
              key={position}
              className={classes["square"]}
              data-phase={getPhase(position)}
              aria-disabled={square.piece === null}
              onClick={() => handleClick(position)}
            >
              {square.piece !== null && (
                <img
                  key={position}
                  className={classes["piece"]}
                  src={getPieceIconPath(square.piece)}
                  alt={`${square.piece.alliance}/${square.piece.type}`}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
