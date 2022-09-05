//Custom Components
import { Container } from "./Elements"

//Custom CSS
import stylesHelpers from "../../css/Helpers.module.css"
import "../../css/components/Overlay/Overlay.css"



export const Overlay = (props) => {

    return (
        <Container 
            className={`overlay ${stylesHelpers.container} ${stylesHelpers.flex} ${stylesHelpers.jcC} ${stylesHelpers.aiC}`}
        >
            {props.children}
        </Container>
    )
}