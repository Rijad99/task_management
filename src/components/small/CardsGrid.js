//Custom CSS
import "../../css/components/CardsGrid/CardsGrid.css"

//Custom Components
import { Container } from "./Elements"



export const CardsGrid = (props) => {

    return (
        <>
            <Container className={`grid-cards ${props.className}`}>
                {props.children}
            </Container>
        </>
    )
}