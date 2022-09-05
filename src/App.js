//React
import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

//Custom Components
import { Spinner } from "./components/small/Spinner.js"

//Custom CSS
import "./css/main/Main.css"

//Dynamic imports of view components
const Home = lazy(() => import("./views/Home"))
const Dashboard = lazy(() => import("./views/Dashboard"))
const Tasks = lazy(() => import("./views/Tasks"))
const Users = lazy(() => import("./views/Users"))
const Settings = lazy(() => import("./views/Settings"))
const Login = lazy(() => import("./views/Login"))
const Error = lazy(() => import("./views/Error"))



class ErrorHandler extends React.Component {

	state = {
		hasError: false
	}

	static getDerivedStateFromError() {

		return { 
			hasError: true 
		}
	}

	render() {

		if (this.state.hasError) {

			return (
				<p>
					Loading has failed. Try refreshing the browser!
				</p>
			)
		}

		return this.props.children;
	}
}

export const App = () => {

	return (

		<Router>
			<ErrorHandler>
				<Suspense fallback={<Spinner />}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/dashboard" element={<Dashboard />} />
						<Route path="/tasks/all/*" element={<Tasks />} />
						<Route path="/users" element={<Users />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="/login" element={<Login />} />
						<Route path="*" element={<Error />} />
					</Routes>
				</Suspense>
			</ErrorHandler>
		</Router>
	)
}