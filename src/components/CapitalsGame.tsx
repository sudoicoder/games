export default function CapitalsGame({}: CapitalsGameProps) {
  return <div>CapitalsGame</div>
}

interface CapitalsGameProps {
  data: Record<Country, Capital>
}

type Country = string
type Capital = string
