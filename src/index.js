//Main
import { App } from "./App"

//React
import React from "react"
import ReactDOM from "react-dom"

//Redux
import { Provider } from "react-redux"
import { createStore } from "redux"

//Reducers
import { allReducers } from "./reducers"



//Global store - REDUX
const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
)