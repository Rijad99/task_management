//React
import React, { useRef } from "react"

//Custom CSS
import "../../css/components/RightSidebar/RightSidebar.css"
import stylesHelpers from "../../css/Helpers.module.css"
import stylesButton from "../../css/components/Button/Button.module.css"

//Images
import userPhoto from "../../images/profile_photos/photo_one.jpg"

//Custom Components
import { LoggedUser } from "../small/LoggedUser"
import { Button } from "../small/Controls"
import { Container } from "../small/Elements"
import { Small, HeadingTwo } from "../small/TextElements"
import { SvgIcon } from "../small/SvgIcon"
import { Card } from "../small/Card"
import { CardsGrid } from "../small/CardsGrid"

//Icons 
import { arrowIconPath, searchIconPath } from "../../data/svgData"



export const RightSidebar = () => {

    const hideRightSidebar = e => {
        e.currentTarget.parentElement.parentElement.classList.toggle("expanded-right")
    }
    
    const changeGrid = e => {
        
        if (window.innerWidth !== 1280) {
            e.currentTarget.parentElement.parentElement.classList.toggle("sidebar-hidden")
    
            window.addEventListener("resize", () => {
    
                if (window.innerWidth <= 1280) {
                    rightSidebar.current.classList.remove("sidebar-hidden")
                    rightSidebar.current.parentElement.classList.remove("expanded-right")
                }
            })
    
        } else {
            e.currentTarget.parentElement.parentElement.classList.toggle("show-sidebar-mobile")
    
            window.addEventListener("resize", () => {
                
                if (rightSidebar.current.classList.contains("show-sidebar-mobile")) {
                    rightSidebar.current.classList.remove("show-sidebar-mobile")
                }
            })
        }
    }

    const rightSidebar = useRef(null)

    return (
        <>
            <Container className={`grid-rightsidebar ${stylesHelpers.container}`} ref={rightSidebar}>
            <SvgIcon 
                    path={arrowIconPath} 
                    className="hide-sidebar-btn"
                    onClick={e => {
                        hideRightSidebar(e)
                        changeGrid(e)
                    }}
                />
                <LoggedUser photo={userPhoto} fullName="Carter D." role="UI/UX Designer" />

                <CardsGrid className={`${stylesHelpers.mt3}`}>
                    <Card className="orange-gradient tasks-progress-card">
                        <Button className={`${stylesButton.small} ${stylesButton.bgTransparent}`}>
                            <SvgIcon path={searchIconPath} />
                        </Button>
                        <HeadingTwo title="40" className={`${stylesHelpers.mt2}`} />
                        <Small text="Upcoming tasks and projects" />
                    </Card>

                    <Card className="purple-gradient tasks-progress-card">
                        <Button className={`${stylesButton.small} ${stylesButton.bgTransparent}`}>
                            <SvgIcon path={searchIconPath} />
                        </Button>
                        <HeadingTwo title="87" className={`${stylesHelpers.mt2}`} />
                        <Small text="Tasks and projects in progress" />
                    </Card>

                    <Card className="blue-gradient tasks-progress-card">
                        <Button className={`${stylesButton.small} ${stylesButton.bgTransparent}`}>
                            <SvgIcon path={searchIconPath} />
                        </Button>
                        <HeadingTwo title="102" className={`${stylesHelpers.mt2}`} />
                        <Small text="Completed tasks" />
                    </Card>
                </CardsGrid>
            </Container>
        </>
    )
}