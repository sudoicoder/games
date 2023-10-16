import type Piece from "../../piece/types/Piece"
import type Square from "../../square/types/Square"
import type ExecutableMove from "../types/ExecutableMove"

export default function createEnPassant(
  fromPiece: Piece,
  capturePiece: Piece,
  fromSquare: Square,
  toSquare: Square,
  captureSquare: Square
): ExecutableMove {
  return {
    type: "enpassant",
    execute: () => {
      fromPiece.move(toSquare, "increment/moves")
      capturePiece.stash()
      return {
        description: description(
          fromPiece,
          capturePiece,
          fromSquare,
          toSquare,
          captureSquare
        ),
        undo: () => {
          capturePiece.place(captureSquare)
          fromPiece.move(fromSquare, "decrement/moves")
        },
      }
    },
  }
}

function description(
  fromPiece: Piece,
  capturePiece: Piece,
  fromSquare: Square,
  toSquare: Square,
  captureSquare: Square
): string {
  return `Moved ${fromPiece.notation} from ${fromSquare.notation} to ${toSquare.notation} with capture of ${capturePiece.notation} at ${captureSquare.notation} enpassant`
}
