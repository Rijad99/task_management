//React
import React from "react"

//Custom CSS
import "../../css/components/Header/Header.css"
import stylesHelpers from "../../css/Helpers.module.css"
import stylesButton from "../../css/components/Button/Button.module.css"
import stylesFormControl from "../../css/components/FormControl/FormControl.module.css"

//Custom Components
import { Button, Notifications, Select } from "../small/Controls"
import { Container } from "../small/Elements"
import { List } from "../small/ListElements"
import { HeadingThree } from "../small/TextElements"
import { SvgIcon } from "../small/SvgIcon"

//Icons
import { searchIconPath, notificationsIconPath, arrowIconPath } from "../../data/svgData"

//Data
import { localizationData } from "../../data/localizationData"



export class Header extends React.Component {

    handleSelectOpenClose = e => {
        e.stopPropagation()

        e.currentTarget.classList.toggle(stylesFormControl.selectVisible)
    }

    //TO DO - Make generic handleSelectValueChange

    // handleSelectValueChange = e => {
    //     const value = e.target.innerText
    //     const selectEl = e.currentTarget.parentElement.parentElement.parentElement.firstChild

    //     if (value) {
    //         selectEl.setAttribute("placeholder", value)
        
    //         this.setState({
    //             ...this.state,
    //             task: {
    //                 ...this.state.task,
    //                 category: value
    //             }
    //         })
    //     }
    // }

    render() {
        return (
            <>
                <Container id="search" className={`grid-header ${stylesHelpers.container}`}>
                    <HeadingThree className={stylesHelpers.title} title={this.props.title} />
                    <List className="header-list">
                        <Button className={`dropdown-toggle ${stylesButton.small} ${stylesButton.bgGrey}`}>
                            <SvgIcon path={searchIconPath} />
                        </Button>
                        <Button className={`dropdown-toggle ${stylesButton.small} ${stylesButton.bgGrey} ${stylesButton.btnNotifications} ${stylesHelpers.ml1}`}>
                            <SvgIcon path={notificationsIconPath} />
                            <Notifications number="2" />
                        </Button>
                        <Container className={`form-controls ${stylesFormControl.small} ${stylesHelpers.flex} ${stylesHelpers.aiC} ${stylesHelpers.jcSb} ${stylesHelpers.ml1}`}>
                            <Select data={localizationData} placeholderText="EN (United States)" className={stylesFormControl.large} icon={arrowIconPath} onClick={e => {
                                this.handleSelectOpenClose(e)
                                // this.handleSelectValueChange(e)
                            }} />
                        </Container>
                    </List>
                </Container>
            </>
        )
    }
}