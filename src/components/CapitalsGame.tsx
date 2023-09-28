export default function CapitalsGame({}: CapitalsGameProps) {
  return <div>CapitalsGame</div>
}

function generatedUnmatchedList(data: CapitalsGameProps["data"]) {
  return Object.entries(data).flat()
}

interface CapitalsGameProps {
  data: Record<Country, Capital>
}

type Country = string
type Capital = string
