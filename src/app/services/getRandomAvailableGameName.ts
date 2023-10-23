import getRandomElementOfIterable from "@/common/utils/getRandomElementOfIterable"
import getAvailableGameNames from "./getAvailableGameNames"

export default function getRandomAvailableGameName() {
  return getRandomElementOfIterable(availableGameNames)
}

const availableGameNames = getAvailableGameNames()
