export class ValidateForm {
    validation = [{ errors: [] }]

    formToValidate = callback => {
        this.validation[0].errors = []

        const 
            form = document.querySelector(`.${callback}`),
            formInputs = form.getElementsByClassName("input")

            for (let i = 0; i < formInputs.length; i++) {

                let inputName = formInputs[i].getAttribute("name")
                inputName = inputName.charAt(0).toUpperCase() + inputName.substring(1, inputName.length)

                this.checkIfEmpty(formInputs[i])

                if (this.validation) {

                    if (this.validation[0].errors.length > 0) {
                    
                        this.validation[0].errors.forEach(error => {
                            
                            if (error.name === inputName.toLocaleLowerCase()) {
                                formInputs[i].nextElementSibling.textContent = `${inputName} ${error.msg}`
                            }
                            else if (error.msg !== formInputs[i].textContent) {
                                formInputs[i].nextElementSibling.textContent = ""
                            }
                        })
                    }
                    else {
                        formInputs[i].nextElementSibling.textContent = ""
                    }
                }
            }

            this.checkForPassword(callback)
    }

    checkIfEmpty = input => {
 
        if (input.value.trim() === "") {

            const inputName = input.getAttribute("name")

            if (this.validation) {
                this.validation[0].errors.push({ name: inputName, msg: "cannot be empty" })

                console.log(this.validation)
            }
        }

        return this.validation[0]
    }

    checkForPassword = () => {

        const 
            passwordEl = document.getElementById("passwordInput"),
            inputName = passwordEl.getAttribute("name")

        if (passwordEl.value.trim() !== "") {

            if (passwordEl.value[0].toUpperCase() !== passwordEl.value[0]) {
                this.validation[0].errors.push({ name: inputName, msg: "must start with first uppercase letter" })
            }

            this.checkForLength(passwordEl, inputName, 6, 20)
        }
    }

    checkForLength(input, inputName, min, max) {
    
        if (input.value.length < min) {
            this.validation[0].errors.push({ name: inputName, msg: `must contain at least ${min} characters` })
            return true
        }

        else if (input.value.length > max) {
            this.validation[0].errors.push({ name: inputName, msg: `can't contain more than ${max} characters` })
            return true
        }

        else {
            return
        }
    }
}