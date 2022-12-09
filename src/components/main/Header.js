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
    constructor(props) {
        super(props)
        this.state = {
            localization: "EN (United States)",
            flag: "../flags/en-us-flag.png"
        }
    }

    componentDidMount() {

        if (!JSON.parse(localStorage.getItem("localization"))) {
            localStorage.setItem("localization", JSON.stringify(`${this.state.localization} - ${this.state.flag}`))
        }
    }

    handleSelectOpenClose = e => {
        e.stopPropagation()

        e.currentTarget.classList.toggle(stylesFormControl.selectVisible)
    }

    handleLocalizationChange = e => {
        const localization = e.target.innerText
        const selectEl = e.currentTarget.parentElement.parentElement.parentElement.firstChild.lastChild
        const image = e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstChild
        const flag = e.target.firstChild?.getAttribute("src")

        if (localization) {
            selectEl.setAttribute("placeholder", localization)
            image.setAttribute("src", flag)
        
            this.setState({
                localization,
                flag
            })

            localStorage.setItem("localization", JSON.stringify(`${localization} - ${flag}`))
        }
    }

    render() {
        let localization = ""
        let flag = ""

        if (!JSON.parse(localStorage.getItem("localization"))) {
            localization = "EN (United States)"
            flag = "../flags/en-us-flag.png"

        } else {
            localization = JSON.parse(localStorage.getItem("localization")).split(" - ")[0]
            flag = JSON.parse(localStorage.getItem("localization")).split(" - ")[1]
        }

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
                            <Select data={localizationData} placeholderText={localization} className={stylesFormControl.large} selectedItemIcon={`${flag}`} icon={arrowIconPath} onClick={e => {
                                this.handleSelectOpenClose(e)
                                this.handleLocalizationChange(e)
                            }} />
                        </Container>
                    </List>
                </Container>
            </>
        )
    }
}