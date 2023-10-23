import PromotionPrompt from "./components/PromotionPrompt"

import getPieceIcon from "./assets/getPieceIcon"

import useChessGame from "./hooks/useChessGame"

import classes from "./chess-game.module.css"

function ChessGame() {
  const {
    alliance,
    board,
    clickSquare,
    getSquarePhase,
    promotionPromptHandle,
  } = useChessGame()
  return (
    <div>
      <PromotionPrompt
        alliance={alliance}
        ref={promotionPromptHandle}
      />
      <div className={classes["board"]}>
        {board.squares.map(rank => {
          return rank.map(square => {
            return (
              <div
                key={square.notation}
                className={classes["square"]}
                data-shade={square.shade}
                data-phase={getSquarePhase(square)}
                onClick={() => clickSquare(square)}
              >
                {square.piece !== null && (
                  <img
                    key={square.piece.notation}
                    className={classes["piece"]}
                    src={getPieceIcon(
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

export default ChessGame
