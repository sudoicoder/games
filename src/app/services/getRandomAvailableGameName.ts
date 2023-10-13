import getAvailableGameNames from "./getAvailableGameNames"

export default function getRandomAvailableGameName() {
  const randomIndex = Math.floor(Math.random() * availableGameNames.length)
  return availableGameNames[randomIndex]
}

const availableGameNames = getAvailableGameNames()
