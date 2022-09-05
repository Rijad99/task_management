//React
import React from "react"

//Custom Components
import { Grid } from "../components/main/Grid"
import { Container } from "../components/small/Elements"

//Custom CSS
import stylesHelpers from "../css/Helpers.module.css"



class Home extends React.Component {

    render() {
        return (
            <>
                <Grid 
                    headerTitle="Home"
                    currentViewComponent={<CurrentView />} 
                />
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



export default Home