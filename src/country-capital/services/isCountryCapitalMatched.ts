import getCountryCapitalRecord from "./getCountryCapitalRecord"

const countryCapitalRecord = getCountryCapitalRecord()

function isCountryCapitalMatched(x: string, y: string) {
  return countryCapitalRecord[x] === y || countryCapitalRecord[y] === x
}

export default isCountryCapitalMatched
