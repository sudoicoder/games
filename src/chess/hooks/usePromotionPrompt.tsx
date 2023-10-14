import { useRef, useState } from "react"

import type Piece from "../services/piece/types/Piece"

import classes from "../styles/chess-game.module.css"

import getPieceIcon from "../assets/getPieceIcon"

export default function usePromotionPrompt() {
  const [show, setShow] = useState(false)
  const promotables = useRef<JSX.Element[]>([])
  function PromotionPrompt() {
    return (
      show && <div className={classes["promotion"]}>{promotables.current}</div>
    )
  }
  async function promptDesignation(alliance: Piece["alliance"]) {
    return await new Promise<Piece["designation"]>(resolve => {
      function selectDesignation(designation: Piece["designation"]) {
        resolve(designation)
        setShow(false)
      }
      promotables.current = [
        <span
          className={classes["square"]}
          onClick={() => selectDesignation("knight")}
        >
          <img
            className={classes["piece"]}
            src={getPieceIcon(alliance, "knight")}
            alt={`${alliance}/knight`}
          />
        </span>,
        <span
          className={classes["square"]}
          onClick={() => selectDesignation("bishop")}
        >
          <img
            className={classes["piece"]}
            src={getPieceIcon(alliance, "bishop")}
            alt={`${alliance}/bishop`}
          />
        </span>,
        <span
          className={classes["square"]}
          onClick={() => selectDesignation("rook")}
        >
          <img
            className={classes["piece"]}
            src={getPieceIcon(alliance, "rook")}
            alt={`${alliance}/rook`}
          />
        </span>,
        <span
          className={classes["square"]}
          onClick={() => selectDesignation("queen")}
        >
          <img
            className={classes["piece"]}
            src={getPieceIcon(alliance, "queen")}
            alt={`${alliance}/queen`}
          />
        </span>,
      ]
      setShow(true)
    })
  }

  return { PromotionPrompt, promptDesignation }
}
