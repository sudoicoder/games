import getAvailableGames from "./getAvailableGames"

export default function getRandomAvailableGameName() {
  const randomIndex = Math.floor(Math.random() * availableGames.length)
  return availableGames[randomIndex]
}

const availableGames = getAvailableGames()
