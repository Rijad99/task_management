export const initialReducer = (
    state = {
        showNotification: false,
        notification: {
            type: "",
            message: ""
        }
    }, 
    action
) => {

switch (action.type) {

        case "SHOW_NOTIFICATION":
            return { 
                ...state, 
                showNotification: action.payload.showNotification, 
                notification: {
                    type: action.payload.notification.type,
                    message: action.payload.notification.message
                }
            }

        case "REMOVE_NOTIFICATION":
            return {
                ...state, 
                showNotification: false
            }

        default: 
            return state
    }
}