import classes from "./styles/country-capital-game.module.css"

import useCountryCapitalGame from "./hooks/useCountryCapitalGame"

export default function CountryCapitalGame() {
  const { getTilePhase, handleClick, isGameCompleted, restartGame, unmatched } =
    useCountryCapitalGame()
  return (
    <div className={classes["game"]}>
      {unmatched.map(tile => {
        return (
          <button
            key={tile}
            className={classes["tile"]}
            onClick={() => handleClick(tile)}
            data-phase={getTilePhase(tile)}
          >
            {tile}
          </button>
        )
      })}
      {isGameCompleted && (
        <div className={classes["success"]}>
          <span className={classes["success-message"]}>Congratulations!!!</span>
          <button
            className={classes["restart"]}
            onClick={restartGame}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  )
}
