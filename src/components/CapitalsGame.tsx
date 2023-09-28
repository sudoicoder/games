import { useState } from "react"

import classes from "@/styles/capitalsgame.module.css"

export default function CapitalsGame({ data }: CapitalsGameProps) {
  const [unmatcheds, setUnmatched] = useState(() => generateUnmatchedList(data))
  const [clicked, setClicked] = useState<Unmatched[]>([])

  function handleClick(unmatched: Unmatched) {
    if (clicked.length !== 1) {
      setClicked([unmatched])
      return
    }
    const previous = clicked[0]
    if (previous.kind === unmatched.kind) {
      setClicked([previous, unmatched])
      return
    }
    const country = previous.kind === "country" ? previous.name : unmatched.name
    const capital = previous.kind === "capital" ? previous.name : unmatched.name
    if (data[country] !== capital) {
      setClicked([previous, unmatched])
      return
    }
    setClicked([])
    setUnmatched(ums => ums.filter(um => um !== previous && um !== unmatched))
  }

  return (
    <div className={classes.game}>
      {unmatcheds.map(unmatched => {
        const extraClasses = !clicked.includes(unmatched)
          ? null
          : clicked.length < 2
          ? classes["tile-selected"]
          : classes["tile-mismatched"]
        return (
          <button
            key={`${unmatched.kind}:${unmatched.name}`}
            className={`${classes.tile} ${extraClasses ?? ""}`.trim()}
            onClick={() => handleClick(unmatched)}
          >
            {unmatched.name}
          </button>
        )
      })}
    </div>
  )
}

interface CapitalsGameProps {
  data: Record<Country, Capital>
}

function generateUnmatchedList(data: CapitalsGameProps["data"]): Unmatched[] {
  return Object.entries(data).flatMap(([country, capital]) => [
    { kind: "country", name: country },
    { kind: "capital", name: capital },
  ])
}

type Unmatched =
  | {
      kind: "country"
      name: Country
    }
  | {
      kind: "capital"
      name: Capital
    }

type Country = string
type Capital = string
