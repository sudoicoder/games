export default function getRandomElementOfIterable<T>(
  iterable: RelativeIndexable<T> & { length: number }
) {
  return iterable.at(Math.floor(Math.random() * iterable.length))!
}
