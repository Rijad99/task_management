//React
import React from "react"
import { useRef } from "react"

//Custom CSS
import stylesHelpers from "../../css/Helpers.module.css"
import "../../css/components/SubHeader/SubHeader.css"

//Functions
import { daysInCurrentMonth, getNameOfDay, setMonthAndTime } from "../../functions/date"

//Custom Components
import { Container, Span } from "../small/Elements"
import { Small } from "../small/TextElements"



export class SubHeader extends React.Component {

    constructor(props) {
        super(props)

        this.isMouseDown =  false
        this.isTouchDown = false
        this.mouseStartPosX = 0
        this.touchStartPosX = 0
        this.scrollLeft = 0
    }

    render() {
        return (
            <>
                <Container className={`grid-subheader ${stylesHelpers.container}`}>
                    <DaysList />
                </Container>
            </>
        )
    }

    static handleMouseDown = (sliderContainer, e) => {
        this.isMouseDown = true;
        sliderContainer.current.classList.add("active");
        this.mouseStartPosX = e.pageX - sliderContainer.current.offsetLeft;
        this.scrollLeft = sliderContainer.current.scrollLeft;
    }

    static handleTouchDown = (sliderContainer, e) => {
        this.isTouchDown = true;
        sliderContainer.current.classList.add("active");
        this.touchStartPosX = e.touches[0].clientX - sliderContainer.current.offsetLeft;
        this.scrollLeft = sliderContainer.current.scrollLeft;
    }

    static handleTouchMove = (sliderContainer, e) => {
        if(!this.isTouchDown) return;

        const touchMovePosX = e.touches[0].clientX - sliderContainer.current.offsetLeft;
        const scrollSpeed = (touchMovePosX - this.touchStartPosX) * 2;
        sliderContainer.current.scrollLeft = this.scrollLeft - scrollSpeed;
    }

    static handleTouchEnd(sliderContainer) {
        this.isTouchDown = false;
        sliderContainer.current.classList.remove("active");
    }

    static handleMouseLeave(sliderContainer) {
        this.isMouseDown = false;
        sliderContainer.current.classList.remove("active");
    }

    static handleMouseUp(sliderContainer) {
        this.isMouseDown = false;
        sliderContainer.current.classList.remove("active");
    }

    static handleMouseMove = (sliderContainer, e) => {
        if(!this.isMouseDown) return;

        const mouseMovePosX = e.pageX - sliderContainer.current.offsetLeft;
        const scrollSpeed = (mouseMovePosX - this.mouseStartPosX) * 0.5;
        sliderContainer.current.scrollLeft = this.scrollLeft - scrollSpeed;
    }
}




const Day = (props) => {

    return (
        <>
            <div key={props.dayInMonth} className={`day-item ${props.day}`}>
                <Span text={props.dayInMonth}></Span>
                <Small text={getNameOfDay(props.dayInWeek)}></Small>
            </div>
        </>
    )
}



const MonthAndTime = ({ data }) => {
    
    return (
        <>
            <Span text={data} className="current-month"></Span>
        </>
    ) 
}



const DaysList = () => {
    const sliderContainer = useRef(null)

    const days = daysInCurrentMonth()

    return (
        <>
            <Container className="grid-days">
                <MonthAndTime data={setMonthAndTime()} />
                <div 
                    className="day-items" 
                    ref={sliderContainer} 
                    onTouchStart={(e) => SubHeader.handleTouchMove(sliderContainer, e)}
                    onTouchMove={(e) => SubHeader.handleTouchMove(sliderContainer, e)}
                    onTouchEnd={() => SubHeader.handleTouchEnd(sliderContainer)}
                    onMouseDown={(e) => SubHeader.handleMouseDown(sliderContainer, e)} 
                    onMouseLeave={() => SubHeader.handleMouseLeave(sliderContainer)} 
                    onMouseUp={() => SubHeader.handleMouseUp(sliderContainer)} 
                    onMouseMove={(e) => SubHeader.handleMouseMove(sliderContainer, e)}
                    >
                    
                    {days.map(d => {
                        const { day, dayInMonth, dayInWeek } = d

                        return (
                            <Day key={dayInMonth} day={day} dayInWeek={dayInWeek} dayInMonth={dayInMonth} />
                        )
                    })}
                </div>
            </Container>
        </>
    )
}