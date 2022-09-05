//React
import { useEffect, useState } from "react"

//Custom Hooks
import { UseDispatch, UseSelector } from "../../customHooks/useLocationCustomHook"


export const Expire = (props) => {
  const dispatch = UseDispatch()
  const selector = UseSelector()

  const [visible, setVisible] = useState(selector.initial.showNotification)

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setVisible(true)

      if (selector.initial.showNotification) {
        dispatch({ type: "REMOVE_NOTIFICATION" })
      }

    }, props.delay)
    
    return () => clearTimeout(timer)

  }, [selector.initial.showNotification]) //eslint-disable-line react-hooks/exhaustive-deps

  return visible && props.children
}