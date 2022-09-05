//React
import { forwardRef } from "react"

//Custom Components
import { Container } from "../small/Elements"

//Custom CSS
import stylesHelpers from "../../css/Helpers.module.css"



export const ScrollableContainer = forwardRef((props, ref) => {

    return (

        <>
            <Container className={`scrollable-container ${stylesHelpers.pt2}`}>
                <Container 
                    className="content-grid-container" 
                    ref={ref} 
                    onMouseDown={props.onMouseDown}
                    onMouseLeave={props.onMouseLeave}
                    onMouseUp={props.onMouseUp}
                    onMouseMove={props.onMouseMove}
                >
                    <Container className="content">

                        {props.component}

                    </Container>
                </Container>
            </Container>
        </>
    )
})