export const taskReducer = (
        state = [
            { id: "1", name:  "Build Web API for Task Management application", date: "01.12.2022", category: "Mobile Apps", isFinished: false },
            { id: "2", name:  "Create alert components", date: "01.12.2022", category: "Mobile Apps", isFinished: false },
            { id: "3", name:  "Create SQL database and API", date: "03.12.2022", category: "Mobile Apps", isFinished: false }
        ], 
        action
    ) => {

    switch (action.type) {

            case "ADD_TASK":
                return [...state, action.payload]
            
            case "UPDATE_TASK":
                return action.payload

            case "DELETE_TASK":
                return action.payload

            case "SHOW_TASKS":
                return state 

            default: 
                return state
    }
}