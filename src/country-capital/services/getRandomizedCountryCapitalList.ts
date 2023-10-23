import randomize from "@/common/utils/randomize"
import countryCapitalRecord from "./getCountryCapitalRecord"

const countryCapitalList = Object.entries(countryCapitalRecord)

export default function getRandomizedCountryCapitalList() {
  return countryCapitalList.flat().sort(randomize)
}
