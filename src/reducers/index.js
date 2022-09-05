//Redux
import { combineReducers } from "redux"

//Reducers
import { taskReducer } from "./task"
import { initialReducer } from "./initial"



export const allReducers = combineReducers({
    initial: initialReducer,
    tasks: taskReducer
})