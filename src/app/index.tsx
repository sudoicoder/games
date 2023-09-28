import CapitalsGame from "@/components/CapitalsGame"

export default function App() {
  return (
    <div>
      <CapitalsGame
        data={{
          Germany: "Berlin",
          India: "New Delhi",
          Turkiye: "Ankara",
          Azerbaijan: "Baku",
        }}
      />
    </div>
  )
}
