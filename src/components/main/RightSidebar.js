//React
import React, { useRef } from "react"

//Custom CSS
import "../../css/components/RightSidebar/RightSidebar.css"
import stylesHelpers from "../../css/Helpers.module.css"

//Images
import userPhoto from "../../images/profile_photos/photo_one.jpg"

//Custom Components
import { LoggedUser } from "../small/LoggedUser"
import { Container } from "../small/Elements"
import { SvgIcon } from "../small/SvgIcon"

//Icons 
import { arrowIconPath } from "../../data/svgData"



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
            </Container>
        </>
    )
}