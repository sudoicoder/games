const HEX = "0123456789ABCDEF"

function getRandomHexValue() {
  return HEX[Math.floor(Math.random() * HEX.length)]
}

function getRandomColor() {
  return new Array(6).fill("").map(getRandomHexValue).join("").padStart(7, "#")
}

export default getRandomColor
