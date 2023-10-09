import getBoardSize from "./getBoardSize"

export default function getRowIndex(position: Position): number {
  return Math.floor(position / getBoardSize())
}
