export const HeadingTwo = (props) => {

    return (
        <>
            <h2 className={props?.className}>{props.title}</h2>
        </>
    )
}

export const HeadingThree = (props) => {

    return (
        <>
            <h3 className={props?.className}>{props.title}</h3>
        </>
    )
}

export const Small = (props) => {

    return (
        <>
            <small id={props?.id} className={props?.className} onKeyUp={props?.onKeyUp} spellCheck={false} contentEditable={props?.contentEditable} suppressContentEditableWarning={true}>{props.text}</small>
        </>
    )
}