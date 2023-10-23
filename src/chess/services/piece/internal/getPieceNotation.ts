import type Piece from "../types/Piece"

import getAllianceNotation from "../../alliance/getAllianceNotation"
import getDesignationNotation from "../../designation/getDesignationNotation"

function getPieceNotation(
  alliance: Piece["alliance"],
  designation: Piece["designation"]
): Piece["notation"] {
  return `${getAllianceNotation(alliance)}${getDesignationNotation(
    designation
  )}`
}

export default getPieceNotation
