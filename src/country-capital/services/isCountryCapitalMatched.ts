import countryCapitalRecord from "./getCountryCapitalRecord"

export default function isCountryCapitalMatched(x: string, y: string) {
  return countryCapitalRecord[x] === y || countryCapitalRecord[y] === x
}
