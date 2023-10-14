import type Piece from "../piece/types/Piece"
import type Square from "../square/types/Square"
import type ExecutableMove from "./types/ExecutableMove"

export default function createCapture(
  fromPiece: Piece,
  toPiece: Piece,
  fromSquare: Square,
  toSquare: Square
): ExecutableMove {
  return {
    type: "capture",
    execute: () => {
      toPiece.stash()
      fromPiece.move(toSquare, "increment/moves")
      return {
        description: description(fromPiece, toPiece, fromSquare, toSquare),
        undo: () => {
          fromPiece.move(fromSquare, "decrement/moves")
          toPiece.place(toSquare)
        },
      }
    },
  }
}

function description(
  fromPiece: Piece,
  toPiece: Piece,
  fromSquare: Square,
  toSquare: Square
): string {
  return `Moved ${fromPiece.notation} from ${fromSquare.notation} to ${toSquare.notation} with capture of ${toPiece.notation}`
}
