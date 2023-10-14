const MARKERS = ["X", "O"] as const

type Marker = (typeof MARKERS)[number]

export default Marker
