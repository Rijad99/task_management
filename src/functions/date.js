const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const checkIfLeapYear = (year) => {

    if (year % 4 === 0) {
        return 29

    } else if (year % 100 !== 0) {
        return 28

    } else if (year % 400 === 0) {
        return 29

    } else {
        return 28
    }
}

export const setDate = () => {
    let date = new Date()

    const 
        month = months[date.getMonth()],
        day = date.getDate(),
        nameOfDay = days[date.getDay()]

    date = `${day} ${month}, ${nameOfDay}`

    return date
}

export const setMonthAndTime = () => {
    const date = new Date()
    const currentMonth = date.getMonth()
    const time = `${date.getHours()}:${date.getMinutes()}`
    const monthAndTime = `${months[currentMonth]} - ${time}`

    return monthAndTime
}

export const daysInCurrentMonth = () => {
    const date = new Date()
    const currentYear = date.getUTCFullYear()
    const currentMonth = date.getMonth()
    const currentDay = date.getDate()

    const days = []
    const daysInMonth = [31, checkIfLeapYear(currentYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    const currentMonthDays = daysInMonth[currentMonth]
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1)

    let counter = firstDayOfMonth.getDay()
    
    for (let i = 1; i < currentMonthDays + 1; i++) {
        counter = counter === 7 
            ? 0 
            : counter

        const day = {
            dayInMonth: i, 
            dayInWeek: counter++
        }

        if (currentDay === day.dayInMonth) {
            day["day"] = "current-day"
        } else {
            day["day"] = "day"
        }

        days.push(day)
    }

    return days
}

export const getNameOfDay = (dayInWeek) => {

    return shortDays[dayInWeek]
}

export const createDates = () => {
    const dates = []
    const date = new Date()
    const currentYear = date.getUTCFullYear()

    const daysInMonth = [31, checkIfLeapYear(currentYear), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let day = 0
    let month = new Date().getMonth()
    let monthInYear = months[month]
    let currentMonthDays = daysInMonth[month++]

    for (let i = 0; i <= currentMonthDays; i++) {
        let newDay = ++day

        if (newDay <= currentMonthDays) {
            newDay = newDay.toString().padStart(2, "0")
            month = month.toString().padStart(2, "0")

            dates.push({
                month: +newDay === 1 ? monthInYear : "",
                date: `${newDay}.${month}.${currentYear}`
            })

        } else {
            day = 0
            currentMonthDays = daysInMonth[month++]
            monthInYear = months[month - 1]
        }
    }

    return dates
}

export const setCurrentDate = () => {
    const date = new Date()
    const currentYear = date.getUTCFullYear()
    let currentMonth = date.getMonth() + 1
    let currentDay = date.getDate()

    currentMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth
    currentDay = currentDay < 10 ? `0${currentDay}` : currentDay

    return `${currentDay}.${currentMonth}.${currentYear}`
}