import { useState } from "react"

import getAvailableGameNames from "../services/getAvailableGameNames"
import getAvailableGames from "../services/getAvailableGames"

export default function useApp() {
  const [selectedGameName, setSelectedGameName] = useState(
    getAvailableGameNames()[0]
  )

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedGameName(e.target.value)
  }

  const Game = getAvailableGames()[selectedGameName]

  return {
    Game,
    availableGameNames: getAvailableGameNames(),
    handleChange,
    selectedGameName,
  } as const
}
