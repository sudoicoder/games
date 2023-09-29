import randomize from "../utils/randomize"

import countryCapitalRecord from "./countryCapitalRecord"

const countryCapitalList = Object.entries(countryCapitalRecord)

export default function getRandomizedCountryCapitalList() {
  return countryCapitalList.flat().sort(randomize)
}
