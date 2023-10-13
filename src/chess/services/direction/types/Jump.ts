import type Horizontal from "./Horizontal"
import type Vertical from "./Vertical"

type Jump<V extends Vertical, H extends Horizontal> = `${V} > ${H} > ${V | H}`

export default Jump
