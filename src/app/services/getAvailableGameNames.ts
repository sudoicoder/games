import getAvailableGames from "./getAvailableGames"

const availableGameNames = Object.keys(getAvailableGames())

function getAvailableGameNames() {
  return availableGameNames
}

export default getAvailableGameNames
