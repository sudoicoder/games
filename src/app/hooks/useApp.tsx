import { useState } from "react"

import getAvailableGameNames from "../services/getAvailableGameNames"
import getAvailableGames from "../services/getAvailableGames"

export default function useApp() {
  const [selected, setSelected] = useState(getAvailableGameNames()[0])

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelected(e.target.value)
  }

  const Game = getAvailableGames()[selected]

  return { Game, handleChange, selected } as const
}
