import { useState } from "react"

import classes from "@/styles/capitalsgame.module.css"

export default function CountryCapitalGame({ data }: CapitalsGameProps) {
  const { getPhase, handleClick, restartGame, unmatcheds } =
    useCountryCapitalGameState(data)

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

interface CapitalsGameProps {
  data: Record<string, string>
}

function useCountryCapitalGameState(data: CapitalsGameProps["data"]) {
  const [unmatcheds, setUnmatched] = useState(() => generateUnmatchedList(data))
  const [clicked, setClicked] = useState<string[]>([])

  function getPhase(value: string) {
    if (clicked.includes(value)) {
      return clicked.length < 2 ? "selected" : "mismatched"
    }
    return "default"
  }

  function handleClick(value: string) {
    if (clicked.length !== 1) {
      setClicked([value])
      return
    }
    const previous = clicked[0]
    if (previous === value) {
      return
    }
    if (data[previous] !== value && data[value] !== previous) {
      setClicked([previous, value])
      return
    }
    setClicked([])
    setUnmatched(ums => ums.filter(um => um !== previous && um !== value))
  }

  function restartGame() {
    setUnmatched(generateUnmatchedList(data))
  }

  return { getPhase, handleClick, restartGame, unmatcheds }
}

function generateUnmatchedList(data: CapitalsGameProps["data"]) {
  return Object.entries(data).flat().sort(randamize)
}

function randamize() {
  return Math.random() - 0.5
}
