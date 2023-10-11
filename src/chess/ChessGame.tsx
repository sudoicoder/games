import classes from "./styles/chess-game.module.css"

import getPieceIconPath from "./services/getPieceIconPath"

import useChessGame from "./hooks/useChessGame"

export default function ChessGame() {
  const { board, getSquarePhase, handleSquareClick } = useChessGame()
  return (
    <div>
      <div className={classes["board"]}>
        {board.getSquares().map((square, position) => {
          return (
            <div
              key={position}
              className={classes["square"]}
              data-shade={square.shade}
              data-phase={getSquarePhase(position)}
              onClick={() => handleSquareClick(position)}
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
      {board.getCapturedPieces().some(pieces => pieces.length > 0) && (
        <div className={classes["captured"]}>
          {board.getCapturedPieces().map(pieces => {
            return (
              <div>
                {pieces.map((piece, i) => {
                  return (
                    <img
                      key={`${piece.alliance}/${piece.type}/${i}`}
                      className={classes["piece"]}
                      src={getPieceIconPath(piece)}
                      alt={`${piece.alliance}/${piece.type}`}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
