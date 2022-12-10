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

//Custom hooks
import { UseDispatch, UseSelector } from "../../customHooks/useLocationCustomHook"



export const Header = (props) => {
    const selector = UseSelector()
    const dispatch = UseDispatch()

    let localization = ""
    let flag = ""

    if (!JSON.parse(localStorage.getItem("localization"))) {
        localization = selector.initial.localization.split(" - ")[0]
        flag = selector.initial.localization.split(" - ")[1]

        const locale = `${localization} - ${flag}`

        localStorage.setItem("localization", JSON.stringify(locale))

    } else {
        const locale = JSON.parse(localStorage.getItem("localization"))

        localization = locale.split(" - ")[0]
        flag = locale.split(" - ")[1]
    }

    const handleSelectOpenClose = e => {
        e.stopPropagation()

        e.currentTarget.classList.toggle(stylesFormControl.selectVisible)
    }

    const handleLocalizationChange = e => {
        const selectedLocalization = e.target.innerText
        const selectEl = e.currentTarget.parentElement.parentElement.parentElement.firstChild.lastChild
        const image = e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstChild
        const localeFlag = e.target.firstChild?.getAttribute("src")

        if (selectedLocalization) {
            selectEl.setAttribute("placeholder", selectedLocalization)
            image.setAttribute("src", localeFlag)

            const locale = `${selectedLocalization} - ${localeFlag}`

            localStorage.setItem("localization", JSON.stringify(locale))

            dispatch({ type: "SET_LOCALIZATION", payload: locale })
        }
    }

    return (
        <>
            <Container id="search" className={`grid-header ${stylesHelpers.container}`}>
                <HeadingThree className={stylesHelpers.title} title={props.title} />
                <List className="header-list">
                    <Button className={`dropdown-toggle ${stylesButton.small} ${stylesButton.bgGrey}`}>
                        <SvgIcon path={searchIconPath} />
                    </Button>
                    <Button className={`dropdown-toggle ${stylesButton.small} ${stylesButton.bgGrey} ${stylesButton.btnNotifications} ${stylesHelpers.ml1}`}>
                        <SvgIcon path={notificationsIconPath} />
                        <Notifications number="2" />
                    </Button>
                    <Container className={`form-controls ${stylesFormControl.small} ${stylesHelpers.flex} ${stylesHelpers.aiC} ${stylesHelpers.jcSb} ${stylesHelpers.ml1}`}>
                        <Select data={localizationData} placeholderText={localization} className={stylesFormControl.large} selectedItemIcon={flag} icon={arrowIconPath} onClick={e => {
                            handleSelectOpenClose(e)
                            handleLocalizationChange(e)
                        }} />
                    </Container>
                </List>
            </Container>
        </>
    )
}