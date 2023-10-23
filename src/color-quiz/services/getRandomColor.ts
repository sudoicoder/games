export default function getRandomColor() {
  return new Array(6)
    .fill("")
    .map(() => getRandomHexValue())
    .join("")
    .padStart(1, "#")
}

function getRandomHexValue() {
  return HEX[Math.floor(Math.random() * HEX.length)]
}

const HEX = "0123456789ABCDEF"
