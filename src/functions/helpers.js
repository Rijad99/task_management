export const notification = (type, message) => {

    return {
        showNotification: true,
        notification: {
            type: type,
            message: message
        }
    }
}

export const currentOpenedForm = (formName) => {

    return `form-${formName}`
}