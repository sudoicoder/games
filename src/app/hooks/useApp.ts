import useState from "@/common/hooks/useState"

import type Game from "../services/types/Game"

import getAvailableGameNames from "../services/getAvailableGameNames"
import getAvailableGames from "../services/getAvailableGames"
import getRandomAvailableGameName from "../services/getRandomAvailableGameName"

function useApp() {
  const [selectedGameName, setSelectedGameName] = useState(
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
  }
}

export default useApp
