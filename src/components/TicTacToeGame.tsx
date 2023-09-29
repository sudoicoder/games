import useTicTacToeGameState from "@/hooks/useTicTacToeGameState"

export default function TicTacToeGame() {
  const { grid } = useTicTacToeGameState()
  return (
    <div>
      {grid.map((row, ri) => {
        return (
          <div key={`${ri}:${row}`}>
            {row.map((square, ci) => {
              return <div key={`${ci}:${square}`}>{square}</div>
            })}
          </div>
        )
      })}
    </div>
  )
}
