//React
import React from "react"

//Custom Components
import { Grid } from "../components/main/Grid"
import { Container } from "../components/small/Elements"

//Custom CSS
import stylesHelpers from "../css/Helpers.module.css"



class Settings extends React.Component {

    render() {
        return (
            <>
                <Grid currentViewComponent={<CurrentView />} headerTitle="Settings" />
            </>
        )
    }
}

const CurrentView = () => {

    return (

        <>
            <Container className={`grid-view ${stylesHelpers.container}`}>

            </Container>
        </>
    )
}



export default Settings