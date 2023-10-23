import getRandomElementOfIterable from "@/common/utils/getRandomElementOfIterable"

const HEX = "0123456789ABCDEF"

function getRandomColor() {
  return new Array(6)
    .fill("")
    .map(() => getRandomElementOfIterable(HEX))
    .join("")
    .padStart(7, "#")
}

export default getRandomColor
