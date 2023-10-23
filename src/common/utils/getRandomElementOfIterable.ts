type Iterable<T> = RelativeIndexable<T> & { length: number }

function getRandomElementOfIterable<T>(iterable: Iterable<T>) {
  return iterable.at(Math.floor(Math.random() * iterable.length))!
}

export default getRandomElementOfIterable
