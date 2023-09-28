import { useState } from "react"

export default function CapitalsGame({ data }: CapitalsGameProps) {
  const [unmatched] = useState(() => generateUnmatchedList(data))
  return (
    <div>
      {unmatched.map(({ kind, name }) => {
        return <button key={`${kind}:${name}`}>{name}</button>
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
