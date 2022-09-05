//Custom CSS
import stylesLoggedUser from "../../css/components/LoggedUser/LoggedUser.module.css"
import stylesButton from "../../css/components/Button/Button.module.css"

//Custom Components
import { Button } from "../small/Controls"
import { Container, Image, Span } from "./Elements"
import { Small } from "./TextElements"
import { SvgIcon } from "./SvgIcon"

//Icons
import { moreIconPath } from "../../data/svgData"



export const LoggedUser = (props) => {

    return (
        <>
            <Container className={stylesLoggedUser.userContainer}>
                <Container className={stylesLoggedUser.photo}>
                    <Image src={props.photo} alt="" className={stylesLoggedUser.img} />
                    <Container className={`${stylesLoggedUser.status} ${stylesLoggedUser.online}`}></Container>
                </Container>
                <Container className={stylesLoggedUser.userInfo}>
                    <Span className={stylesLoggedUser.fullName} text={props.fullName}></Span>
                    <Small className={stylesLoggedUser.role} text={props.role}></Small>
                </Container>
                <Button className={`${stylesButton.small} ${stylesButton.bgDarkGrey} ${stylesLoggedUser.btnMore}`}> 
                    <SvgIcon path={moreIconPath} />
                </Button>
            </Container>
        </>
    )
}