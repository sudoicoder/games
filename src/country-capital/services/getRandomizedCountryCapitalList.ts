import randomize from "@/common/utils/randomize"
import getCountryCapitalRecord from "./getCountryCapitalRecord"

const countryCapitalList = Object.entries(getCountryCapitalRecord())

function getRandomizedCountryCapitalList() {
  return countryCapitalList.flat().sort(randomize)
}

export default getRandomizedCountryCapitalList
