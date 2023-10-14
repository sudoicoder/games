import countryCapitalRecord from "./countryCapitalRecord"

const countryCapitalList = Object.entries(countryCapitalRecord)

export default function getRandomizedCountryCapitalList() {
  return countryCapitalList.flat().sort(randomize)
}

function randomize() {
  return Math.random() - 0.5
}
