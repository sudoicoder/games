import getAvailableGames from "./getAvailableGames"

export default function getAvailableGameNames() {
  return availableGameNames
}

const availableGameNames = Object.keys(getAvailableGames)
