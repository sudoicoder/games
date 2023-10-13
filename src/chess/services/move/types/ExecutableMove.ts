import type Piece from "../../piece/types/Piece"
import type Move from "./Move"

type ExecutableMove =
  | {
      type: "walk" | "capture" | "castle" | "enpassant"
      execute: () => Move
    }
  | {
      type: `promotion/${"walk" | "capture"}`
      execute: (designation: Piece["designation"]) => Move
    }

export default ExecutableMove
