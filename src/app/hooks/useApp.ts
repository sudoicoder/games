import { useState } from "react"

import type Game from "../services/types/Game"

import getAvailableGameNames from "../services/getAvailableGameNames"
import getAvailableGames from "../services/getAvailableGames"
import getRandomAvailableGameName from "../services/getRandomAvailableGameName"

export default function useApp() {
  const [selectedGameName, setSelectedGameName] = useState<Game["name"]>(
    getRandomAvailableGameName
  )

  function selectGameName(gameName: Game["name"]) {
    setSelectedGameName(gameName)
  }

  const SelectedGame = getAvailableGames()[selectedGameName]

  return {
    SelectedGame,
    getAvailableGameNames,
    selectGameName,
    selectedGameName,
  } as const
}
