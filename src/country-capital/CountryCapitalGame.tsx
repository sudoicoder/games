import classes from "./styles/country-capital-game.module.css"

import useCountryCapitalGameState from "./hooks/useCountryCapitalGameState"

export default function CountryCapitalGame() {
  const { getPhase, handleClick, restartGame, unmatcheds } =
    useCountryCapitalGameState()

  const isGameComplete = unmatcheds.length <= 0

  return (
    <div className={classes.game}>
      {unmatcheds.map(unmatched => {
        const phase = getPhase(unmatched)
        const extraClasses = phase === "default" ? "" : classes[`tile-${phase}`]
        return (
          <button
            key={unmatched}
            className={`${classes.tile} ${extraClasses}`.trim()}
            onClick={() => handleClick(unmatched)}
          >
            {unmatched}
          </button>
        )
      })}
      {isGameComplete && (
        <div className={classes.success}>
          <span className={classes["success-message"]}>Congratulations!!!</span>
          <button
            className={classes.restart}
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  )
}