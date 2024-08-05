import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(7);

    const increment = useCallback(
      (increment) => {
        setCounter((value) => value + increment);
      },
      [],
    )

  return (
    <>
        <h1>UseCallbackHook {counter}</h1>

        <hr />
        <ShowIncrement increment={increment}/>
    </>
)
}
