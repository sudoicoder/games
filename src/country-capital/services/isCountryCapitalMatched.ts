import countryCapitalRecord from "./countryCapitalRecord"

export default function isCountryCapitalMatched(x: string, y: string) {
  return countryCapitalRecord[x] === y || countryCapitalRecord[y] === x
}
