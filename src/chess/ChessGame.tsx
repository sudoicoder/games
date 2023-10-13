import classes from "./styles/chess-game.module.css"

import useChessGame from "./hooks/useChessGame"

export default function ChessGame() {
  const {
    PromotionPrompt,
    board,
    getPieceIconPath,
    getSquarePhase,
    handleSquareClick,
  } = useChessGame()
  return (
    <div>
      <PromotionPrompt />
      <div className={classes["board"]}>
        {board.squares.map(rank => {
          return rank.map(square => {
            return (
              <div
                key={square.notation}
                className={classes["square"]}
                data-shade={square.shade}
                data-phase={getSquarePhase(square)}
                onClick={() => handleSquareClick(square)}
              >
                {square.piece !== null && (
                  <img
                    key={square.piece.notation}
                    className={classes["piece"]}
                    src={getPieceIconPath(
                      square.piece.alliance,
                      square.piece.designation
                    )}
                    alt={square.piece.notation}
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
