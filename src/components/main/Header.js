//React
import React from "react"

//Custom CSS
import "../../css/components/Header/Header.css"
import stylesHelpers from "../../css/Helpers.module.css"
import stylesForm from "../../css/components/Form/Form.module.css"
import stylesButton from "../../css/components/Button/Button.module.css"

//Custom Components
import { Button, Notifications, FormControl } from "../small/Controls"
import { Container } from "../small/Elements"
import { List } from "../small/ListElements"
import { HeadingThree } from "../small/TextElements"
import { SvgIcon } from "../small/SvgIcon"

//Icons
import { searchIconPath, notificationsIconPath } from "../../data/svgData"



export class Header extends React.Component {

    render() {
        return (
            <>
                <Container className={`grid-header ${stylesHelpers.container}`}>
                    <HeadingThree className={stylesHelpers.title} title={this.props.title} />
                    <List className="header-list">
                        <FormControl type="text" size={stylesForm.small} className="search-control" icon={searchIconPath} placeholder="Search" />
                        <Button className={`${stylesButton.small} ${stylesButton.bgGrey} ${stylesButton.btnNotifications} ${stylesHelpers.ml1}`}>
                            <SvgIcon path={notificationsIconPath} />
                            <Notifications number="2" />
                        </Button>
                    </List>
                </Container>
            </>
        )
    }
}