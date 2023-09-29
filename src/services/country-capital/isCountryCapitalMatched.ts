import getCountryCapitalRecord from "./getCountryCapitalRecord"

const RECORD = getCountryCapitalRecord()

export default function isCountryCapitalMatched(x: string, y: string) {
  return RECORD[x] === y || RECORD[y] === x
}
