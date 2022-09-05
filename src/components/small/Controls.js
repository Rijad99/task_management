//React
import { useState } from "react"
import PropTypes from "prop-types"

//Custom CSS
import stylesButton from "../../css/components/Button/Button.module.css"
import stylesFormControl from "../../css/components/FormControl/FormControl.module.css"
import stylesHelpers from "../../css/Helpers.module.css"
import "../../css/components/Checkbox/Checkbox.css"

//Custom Components
import { Container, Label } from "./Elements"
import { Small } from "./TextElements"
import { SvgIcon } from "./SvgIcon"
import { List, ListItem } from "./ListElements"



export const Button = (props) => {

    return (
        <>
            <button type={props?.type} id={props?.id} className={props.className} onClick={props?.onClick}>
                {props.children}
            </button>
        </>
    )
}

export const Notifications = (props) => {

    return (
        <>
            <Container className={stylesButton.circle}>
                <Small text={props.number} />
            </Container>
        </>
    )
}

export const Checkbox = ({ labelText, color }) => {
    const [isCbActive, setIsCbActive] = useState("cb-unchecked")

    const changeCheckboxState = () => {
        isCbActive === "cb-unchecked" ? setIsCbActive(`cb-checked-${color}`) : setIsCbActive("cb-unchecked")
    }

    const handleChange = () => {
        changeCheckboxState()
    }

    return (
        <>
            <Container className={`cb ${isCbActive}`} onClick={() => {
                handleChange()
            }}>
                <Input type="checkbox" id="remember" className="custom-cb" />
                <Label htmlFor="remember" text={labelText}></Label>
            </Container>
        </>
    )
}

export const Form = (props) => {

    return (
        <>
            <form id={props?.id} className={props.className} onSubmit={props.onSubmit}>
                {props.children}
            </form>
        </>
    )
}

export const Input = (props) => {

    return (
        <>
            <input name={props.name} type={props.type} id={props?.id} className={props?.className} suppressContentEditableWarning={true}  disabled={props?.disabled} value={props?.value} placeholder={props?.placeholder} onChange={props.onChange} spellCheck="false" />
        </>
    )
}

export const FormControl = (props) => {

    return (
        <>
            <Container className={`${stylesFormControl.formControl} ${props?.className}`}>
                <Label text={props.text} />
                {props?.icon && <SvgIcon path={props.icon} className={stylesHelpers.mr05} />}
                {props.children}
                <Small id={`${props.name}-error`} className={stylesFormControl.inputError} text={props.error}></Small>
            </Container>
        </>
    )
}

export const Select = (props) => {

    return (
        <Container className={`${stylesFormControl.select} ${props?.className}`} onClick={props.onClick}>
            <Input placeholder="Choose category" disabled />
            {props?.icon && <SvgIcon path={props.icon} />}
            <Container className={`${stylesFormControl.selectList}`}>
                <List>
                    {
                        props.data.map(item => {
                            const { id, name } = item

                            return (
                                <ListItem key={id} onClick={props.onClick}>{name}</ListItem>
                            )
                        })
                    }
                </List>
            </Container>
        </Container>
    ) 
}

export const Dropdown = (props) => {

    return (
        <Container className={`${stylesFormControl.dropdown} ${props?.className}`}>
            <List>
                {
                    props.data.map(item => {
                        const { id, name } = item

                        return (
                            <ListItem key={id} onClick={props?.onClick}>{name}</ListItem>
                        )
                    })
                }
            </List>
        </Container>
    ) 
}



Checkbox.propTypes = {
    labelText: PropTypes.string
}