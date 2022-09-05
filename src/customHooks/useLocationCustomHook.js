//React
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const GetCurrentLocation = () => {
    const location = useLocation()

    return location  
}

export const UseDispatch = () => {
    const dispatch = useDispatch()
    
    return dispatch  
}

export const UseSelector = () => {
    const selector = useSelector(state => state)

    return selector  
}