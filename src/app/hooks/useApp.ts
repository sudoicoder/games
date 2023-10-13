import { useState } from "react"

import type Game from "../types/Game"

import getAvailableGames from "../services/getAvailableGames"
import getRandomAvailableGame from "../services/getRandomAvailableGame"

export default function useApp() {
  const [SelectedGame, setSelectedGame] = useState(getRandomAvailableGame)

  function selectGame(Game: Game) {
    setSelectedGame(Game)
  }

  return {
    SelectedGame,
    getAvailableGames,
    selectGame,
  } as const
}
