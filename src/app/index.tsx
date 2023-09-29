import CountryCapitalGame from "@/components/CountryCapitalGame"
import getCountryCapitalRecord from "@/services/getCountryCapitalRecord"

export default function App() {
  return (
    <div>
      <CountryCapitalGame data={getCountryCapitalRecord()} />
    </div>
  )
}
