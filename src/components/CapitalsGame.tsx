import { useState } from "react"

import classes from "@/styles/capitalsgame.module.css"

export default function CapitalsGame({ data }: CapitalsGameProps) {
  const [unmatcheds] = useState(() => generateUnmatchedList(data))
  return (
    <div className={classes.game}>
      {unmatcheds.map(unmatched => {
        return (
          <button
            key={`${unmatched.kind}:${unmatched.name}`}
            className={classes.tile}
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
