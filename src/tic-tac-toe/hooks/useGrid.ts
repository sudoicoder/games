import useLazyRef from "@/common/hooks/useLazyRef"
import createGrid from "../services/grid/createGrid"

export default function useGrid() {
  return useLazyRef(() => createGrid(3))
}
