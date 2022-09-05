//React
import React from "react"

//Custom CSS
import "../css/views/LoginView/LoginView.css"
import stylesHelpers from "../css/Helpers.module.css"
import stylesForm from "../css/components/Form/Form.module.css"
import stylesButton from "../css/components/Button/Button.module.css"

//Custom Components
import { Container, Image } from "../components/small/Elements"
import { Button, Checkbox, Form, FormControl } from "../components/small/Controls"
import { HeadingTwo, Small } from "../components/small/TextElements"

//Icons
import { messageIconPath, passwordIconPath } from "../data/svgData"

//Logos
import googleLogo from "../images/logos/google-logo.svg"
import facebookLogo from "../images/logos/fb-logo.svg"


class Login extends React.Component {

    render() {
        return (
            <>
                <Container className={`${stylesHelpers.container} ${stylesHelpers.fullWidthHeight} ${stylesHelpers.flex} ${stylesHelpers.jcC} ${stylesHelpers.aiC}`}>
                    <Form className={`form form-login ${stylesForm.small}`}>
                        <HeadingTwo className={stylesHelpers.mb3} title="Sign Up" />
                        
                        <Container className={`options ${stylesHelpers.mb3}`}>
                            <Button className={`${stylesButton.large} ${stylesButton.bgGrey} ${stylesHelpers.mr1}`}>
                                <Image src={googleLogo} />
                                Sign Up with Google       
                            </Button>
                            <Button className={`${stylesButton.large} ${stylesButton.bgGrey}`}> 
                                <Image src={facebookLogo} />
                                Sign Up with Facebook 
                            </Button>
                        </Container>

                        <Container className={`divider ${stylesHelpers.mb3}`}>
                            <Container className="line"></Container>
                            or
                            <Container className="line"></Container>
                        </Container>

                        <Container className={"form-controls"}>
                            <FormControl type="text" icon={messageIconPath} text="E-mail" placeholder="E-mail" />
                            <FormControl  className={stylesHelpers.mt3} type="password" icon={passwordIconPath} text="Password" margin={stylesHelpers.mt3} placeholder="Password" />
                        </Container>

                        <Container className={`note ${stylesHelpers.mt1}`}>
                            <Checkbox />
                            <Small text="I agree to Platform's Terms of Service and Privacy Policy" className={stylesHelpers.ml1} />
                        </Container>

                        <Button className={`${stylesButton.largest} ${stylesButton.bgLightBlue} ${stylesHelpers.mt3}`}>
                            Sign Up 
                        </Button>
                    </Form>
                </Container>
            </>
        )
    }
}



export default Login