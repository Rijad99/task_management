//Custom CSS
import "../../css/components/CardsGrid/CardsGrid.css"

//Custom Components
import { Container } from "./Elements"



export const CardsGrid = (props) => {

    return (
        <>
            <Container className={`tasks-progress-cards ${props.className}`}>
                {props.children}
            </Container>
        </>
    )
}