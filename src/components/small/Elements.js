//React
import { forwardRef } from "react"



export const Container = forwardRef((props, ref) => {

    return (
        <>
            <div 
                key={props?.key}
                className={props.className} 
                onClick={props?.onClick}
                ref={ref && ref}
                onTouchStart={props?.onTouchStart}
                onTouchMove={props?.onTouchMove}
                onTouchEnd={props?.onTouchEnd}
                onMouseDown={props?.onMouseDown}
                onMouseLeave={props?.onMouseLeave}
                onMouseUp={props?.onMouseUp}
                onMouseMove={props?.onMouseMove}
            >
                {props.children}
            </div>
        </>
    )
})

export const Image = (props) => {

    return (
        <>
            <img src={props.src} alt={props?.alt} className={props?.className} />
        </>
    )
}

export const Span = (props) => {

    return (
        <>
            <span className={props?.className}>
                {props.text}
            </span>
        </>
    )
}

export const Label = (props) => {

    return (
        <>
            <label htmlFor={props?.htmlFor}>
                {props.text}
            </label>
        </>
    )
}