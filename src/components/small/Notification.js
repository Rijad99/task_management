//Custom Components
import { Container, Span } from "./Elements"
import { SvgIcon } from "./SvgIcon"

//Custom CSS
import "../../css/components/Notification/Notification.css"

//Icons
import { checkmarkIconPath, warnErrIconPath, infoIconPath } from "../../data/svgData"

export const Notification = (props) => {

    return (
        <Container
            className={`notification ${props.showNotification ? `${props.type} visible` : "hidden"}`}
        >
            <SvgIcon path={props.type === "success" ? checkmarkIconPath : props.type === "info" ? infoIconPath : warnErrIconPath } />
            <Span text={props.text} />
        </Container>
    )
}