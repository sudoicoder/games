import getCountryCapitalRecord from "./getCountryCapitalRecord"

const record = getCountryCapitalRecord()

export default function isCountryCapitalMatched(x: string, y: string) {
  return record[x] === y || record[y] === x
}
