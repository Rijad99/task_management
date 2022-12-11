//React
import React, { useRef } from "react"
import { Link, useLocation } from "react-router-dom"

//Custom Components
import { SvgIcon } from "../small/SvgIcon"
import { Tooltip } from "../small/Tooltip"
import { Container } from "../small/Elements"
import { List, ListItem } from "../small/ListElements"

//Data
import { homeIconPath, dasboardIconPath, logoutIconPath, settingsIconPath, userIconPath, tasksIconPath, arrowIconPath } from "../../data/svgData"

//Custom CSS
import stylesSidebar from "../../css/components/Sidebar/Sidebar.module.css"
import stylesHelpers from "../../css/Helpers.module.css"

//Sidebar links to render based on user role
const routes = [
	{
		id: 1,
		name: "Home",
		visibleTo: [
			"admin",
			"user"
		],
		link: "home",
		svgPath: homeIconPath
	},
	{
		id: 2,
		name: "Dashboard",
		visibleTo: [
			"admin"
		],
		link: "dashboard",
		svgPath: dasboardIconPath
	},
	{
		id: 3,
		name: "Tasks",
		visibleTo: [
			"admin",
			"user"
		],
		link: "tasks/all",
		svgPath: tasksIconPath
	},
	{
		id: 4,
		name: "Users",
		visibleTo: [
			"admin"
		],
		link: "users",
		svgPath: userIconPath
	},
	{
		id: 5,
		name: "Settings",
		visibleTo: [
			"admin",
			"user"
		],
		link: "settings",
		svgPath: settingsIconPath
	},
	{
		id: 6,
		name: "Logout",
		visibleTo: [
			"admin",
			"user"
		],
		link: "login",
		svgPath: logoutIconPath
	}
]



const changeGrid = e => {

	if (window.innerWidth > 1280 && window.innerWidth) {
		e.currentTarget.parentElement.parentElement.parentElement.classList.toggle("expanded-left")
	}
}

const hideSidebar = (e, sidebar) => {
	
	if (window.innerWidth !== 1280) {
		e.currentTarget.parentElement.parentElement.classList.toggle(stylesSidebar.sidebarHidden)

		window.addEventListener("resize", () => {

			if (window.innerWidth <= 1280) {
				sidebar.current.classList.remove(stylesSidebar.sidebarHidden)
				sidebar.current.parentElement.classList.remove("expanded-left")
			}
		})

	} else {
		e.currentTarget.parentElement.parentElement.classList.toggle(stylesSidebar.showSidebarMobile)

		window.addEventListener("resize", () => {
			
			if (sidebar.current.classList.contains(stylesSidebar.showSidebarMobile)) {
				sidebar.current.classList.remove(stylesSidebar.showSidebarMobile)
			}
		})
	}
}

export const Sidebar = ({ userRoles }) => {

	const location = useLocation()
	const { pathname } = location
	const splitLocation = pathname.split("/")

	const sidebar = useRef(null)

	return (
		<>
			<Container className={`grid-sidebar ${stylesSidebar.sidebar} ${stylesHelpers.container}`} ref={sidebar}>
				<List className={stylesSidebar.sidebarlist}>
					<SvgIcon 
						path={arrowIconPath} 
						className={stylesSidebar.hideSidebarBtn} 
						onClick={e => {
							hideSidebar(e, sidebar)
							changeGrid(e)
						}}
					/>
					
					{
						<Container className="list-container">
							{
								routes.map(route => {
									const { id, name, visibleTo, link, svgPath } = route
		
									const userHasRoles = userRoles.some(role => visibleTo.includes(role))
		
									if (userHasRoles) {
		
										return (
											<ListItem 
												key={id} 
												className={name === "Logout" ? stylesSidebar.logout : "link"}
											>
												<Link 
													to={`/${link}`} 
													className={(splitLocation[1] === "" && link === "home") ? stylesSidebar.active : splitLocation[1] === name.toLowerCase() ? stylesSidebar.active : ""}
												>
													<SvgIcon path={svgPath} />
												</Link>
											</ListItem>
										)
									}
		
									return null
								})
							}
						</Container>
					}

				</List>
			</Container>
		</>
	)
}