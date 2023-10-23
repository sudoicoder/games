import getRandomElementOfIterable from "@/common/utils/getRandomElementOfIterable"
import getAvailableGameNames from "./getAvailableGameNames"

const availableGameNames = getAvailableGameNames()

function getRandomAvailableGameName() {
  return getRandomElementOfIterable(availableGameNames)
}

export default getRandomAvailableGameName
