import CapitalsGame from "@/components/CapitalsGame"
import getCountryCapitalRecord from "@/services/getCountryCapitalRecord"

export default function App() {
  return (
    <div>
      <CapitalsGame data={getCountryCapitalRecord()} />
    </div>
  )
}
