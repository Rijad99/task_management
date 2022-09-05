//React
import React from "react"

//Custom Components
import { Small } from "./TextElements"

//Custom CSS
import stylesTooltip from "../../css/components/Tooltip/Tooltip.module.css"

export class Tooltip extends React.Component {

    render() {
        return (
            <>
                <Small className={stylesTooltip.tooltip} text={this.props.text}></Small>
            </>
        )
    }
}