import useChessGameState from "./hooks/useChessGameState"

export default function ChessGame() {
  const { board } = useChessGameState()
  return (
    <div>
      {board.map((rank, row) => {
        return (
          <div key={row}>
            {rank.map((square, col) => {
              return <div key={col}>{square}</div>
            })}
          </div>
        )
      })}
    </div>
  )
}
