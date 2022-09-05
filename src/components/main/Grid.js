//React
import React, { useState } from "react"

//Custom Components
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { RightSidebar } from "./RightSidebar"
import { Container } from "../small/Elements" 
import { Notification } from "../small/Notification"
import { Expire } from "../small/Expire"

//Custom Hooks
import { UseSelector } from "../../customHooks/useLocationCustomHook"

//Custom CSS
import "../../css/components/Grid/Grid.css"
import stylesHelpers from "../../css/Helpers.module.css"



export const Grid = (props) => {
    
    const [userRoles, setUserRoles] = useState(["admin"])

    const selector = UseSelector()

    return (
        <>
            { 
                <Expire delay={2000}>
                    <Notification showNotification={selector.initial.showNotification} type={selector.initial.notification.type} text={selector.initial.notification.message} /> 
                </Expire>
            }
            <Container className={`grid ${stylesHelpers.container}`}>
                <Header title={props.headerTitle} />
                {props.subHeader && props.subHeader}
                <Sidebar userRoles={userRoles} />
                {props.currentViewComponent}
                <RightSidebar />
            </Container>
        </>
    )
}