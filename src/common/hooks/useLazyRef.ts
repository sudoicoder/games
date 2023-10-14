import { useRef } from "react"

export default function useLazyRef<T>(create: () => T) {
  const ref = useRef<T>()
  return ref.current ?? (ref.current = create())
}
