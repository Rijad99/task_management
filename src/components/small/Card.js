//Custom CSS
import "../../css/components/Card/Card.css"

//Custom Components
import { Container } from "./Elements"



export const Card = (props) => {

    return (
        <>
            <Container className={`card ${props.className}`}>
                {props.children}
            </Container>
        </>
    )
}