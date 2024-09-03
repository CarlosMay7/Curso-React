import { memo } from "react"

export const ShowIncrement = memo(({increment}) => {
  return (
    <button onClick={increment(7)} className="btn btn-primary">Incrementar</button>
)
})
