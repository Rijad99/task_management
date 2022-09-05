//React
import React from "react"
import PropTypes from "prop-types"

//Custom CSS
import stylesSvgIcon from "../../css/components/SvgIcon/SvgIcon.module.css"

export class SvgIcon extends React.Component {

    render() {
        return (
            <>
                <svg version="1.1" width={this.props?.width || "21.5px"} height={this.props?.height || "22px"}  x="0px" y="0px" className={this.props.className} onClick={this.props.onClick}>
                    <path d={this.props.path} className={stylesSvgIcon.path} />
                </svg>
            </>
        )
    }
}

SvgIcon.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    path: PropTypes.string.isRequired,
}