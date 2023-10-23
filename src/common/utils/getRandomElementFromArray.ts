export default function getRandomElementFromArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)]
}
