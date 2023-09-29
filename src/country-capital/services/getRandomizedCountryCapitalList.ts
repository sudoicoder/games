import randomize from "../utils/randomize"

import getCountryCapitalRecord from "./getCountryCapitalRecord"

const COUNTRY_CAPITAL_LIST = Object.entries(getCountryCapitalRecord())

export default function getRandomizedCountryCapitalList() {
  return COUNTRY_CAPITAL_LIST.flat().sort(randomize)
}
