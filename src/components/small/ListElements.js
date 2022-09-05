//React
import { forwardRef } from "react"


export const List = forwardRef((props, ref) => {

    return (
        <>
            <ul className={props.className} ref={ref && ref}>
                {props.children}
            </ul>
        </>
    )
})

export const ListItem = forwardRef((props, ref) => {

    return (
        <>
            <li className={props.className} ref={ref && ref} onClick={props?.onClick}>
                {props?.children}
            </li>
        </>
    )
})