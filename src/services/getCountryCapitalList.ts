import randomize from "@/utils/randomize"

const COUNTRY_CAPITAL_LIST = [
  ["Australia", "Canberra"],
  ["Argentina", "Buenos Aires"],
  ["Azerbaijan", "Baku"],
  ["Bangladesh", "Dhaka"],
  ["Bhutan", "Thimphu"],
  ["Brazil", "Brazilia"],
  ["Cambodia", "Phnom Penh"],
  ["Canada", "Ottowa"],
  ["China", "Beijing"],
  ["France", "Paris"],
  ["Germany", "Berlin"],
  ["India", "New Delhi"],
  ["Japan", "Tokyo"],
  ["Laos", "Vientiane"],
  ["Malaysia", "Kuala Lumpur"],
  ["Maldives", "Male"],
  ["Mongolia", "Ulaanbaatar"],
  ["Mexico", "Mexico City"],
  ["Myanmar", "Naypyidaw"],
  ["Nepal", "Kathmandu"],
  ["North Korea", "Pyangyong"],
  ["Pakistan", "Islamabad"],
  ["Phillipines", "Manila"],
  ["Portugal", "Lisbon"],
  ["Russia", "Moscow"],
  ["Singapore", "No Capital"],
  ["Spain", "Madrid"],
  ["Sri Lanka", "Colombo"],
  ["South Korea", "Seoul"],
  ["Taiwan", "Taipei City"],
  ["Thailand", "Bangok"],
  ["Turkiye", "Ankara"],
  ["United Kingdom of Great Britain and Northern Ireland", "London"],
  ["United States of America", "Washington DC"],
  ["Vietnam", "Hanoi"],
]

export default function getRandomizedCountryCapitalList() {
  return COUNTRY_CAPITAL_LIST.flat().sort(randomize)
}
