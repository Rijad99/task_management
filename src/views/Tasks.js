//React
import React, { createRef } from "react"
import { Link, Routes, Route } from "react-router-dom"

//Other Packages
import { v4 as uuidv4 } from "uuid"

//Custom Components
import { Grid } from "../components/main/Grid"
import { SubHeader } from "../components/main/SubHeader"
import { Container } from "../components/small/Elements"
import { ScrollableContainer } from "../components/main/ScrollableContainer"
import { List, ListItem } from "../components/small/ListElements"
import { Button, Checkbox, Form, FormControl, Select, Dropdown, Input } from "../components/small/Controls"
import { Overlay } from "../components/small/Overlay"
import { SvgIcon } from "../components/small/SvgIcon"
import { HeadingTwo, Small } from "../components/small/TextElements"

//Custom hooks
import { GetCurrentLocation, UseDispatch, UseSelector } from "../customHooks/useLocationCustomHook"

//Custom CSS
import "../css/views/TasksView/TasksView.css"
import stylesHelpers from "../css/Helpers.module.css"
import stylesForm from "../css/components/Form/Form.module.css"
import stylesFormControl from "../css/components/FormControl/FormControl.module.css"
import stylesButton from "../css/components/Button/Button.module.css"
import "../css/components/ScrollableContainer/ScrollableContainer.css"

//Icons
import { addItemIconPath, dotsIconPath, arrowIconPath, closeIconPath, saveIconPath } from "../data/svgData"

//Functions
import { setCurrentDate } from "../functions/date"
import { createDates } from "../functions/date"
import { notification, currentOpenedForm } from "../functions/helpers"

//FormValidation
import { ValidateForm } from "../formValidation/formValidation"

//Data
import { categoriesData } from "../data/categoriesData"
import { taskDropdownData } from "../data/dropdownData"



//Categories
const categories = [
    {
        id: "category-1",
        type: "All",
        link: "all"
    },
    {
        id: "category-2",
        type: "Design",
        link: "design"
    },
    {
        id: "category-3",
        type: "Mobile Apps",
        link: "mobileapps"
    },
    {
        id: "category-4",
        type: "Graphic Design",
        link: "graphicdesign"
    },
    {
        id: "category-5",
        type: "Prototyping",
        link: "prototyping"
    }
]



class Tasks extends React.Component {

    constructor(props) {
        super(props)
        this.slider = createRef()
        this.state = {
            categorySelected: null,
            isActiveAddTaskForm: false,
            tasks: [],
            task: {
                id: null,
                name: "",
                date: setCurrentDate(),
                isFinished: false,
                category: ""
            }
        } 
    }

    render() {

        return (
            <>
                {
                    this.state.isActiveAddTaskForm &&
                    <this.CreateTaskForm />
                }
                <Grid 
                    headerTitle="Task Management"
                    currentViewComponent={
                    <this.CurrentView 
                        state={this.state} 
                        slider={this.slider} 
                        onClick={this.handleCategoryChange}                  
                    />} 
                    subHeader={<SubHeader />}        
                />
            </>
        )
    }

    enableSave = (e, name) => {

        if (e.currentTarget.innerText !== name) {
            e.currentTarget.classList.add("show-save")
        } else {
            e.currentTarget.classList.remove("show-save")
        }
    }

    saveTaskChanges = (e, id, selector, dispatch, newTitle) => {

        const task = selector.tasks.find(task => task.id === id)
        const rest = selector.tasks.filter(task => task.id !== id)
        const updatedTask = { ...task, name: newTitle }
        const tasks = [updatedTask, ...rest].sort((a, b) => a.id - b.id)

        dispatch({ type: "UPDATE_TASK", payload: tasks })

        e.currentTarget.parentElement.firstChild.nextSibling.classList.remove("show-save")
    }

    deleteTask = (id, selector, dispatch) => {
        const tasks = selector.tasks.filter(task => task.id !== id)

        dispatch({ type: "DELETE_TASK", payload: tasks })
    }

    handleSubmit = (e, dispatch) => {
        e.preventDefault()
        
        dispatch({ type: "ADD_TASK", payload: {...this.state.task, id: uuidv4()} })
        dispatch({ type: "SHOW_NOTIFICATION", payload: notification("success", "Task added successfully!") })

        this.setState({
            ...this.state,
            tasks: [...this.state.tasks, this.state.task]
        })
    }

    updateTaskState = (name, value) => {

        this.setState({
            ...this.state,
            task: {
                ...this.state.task,
                [name]: value
            }
        })
    }

    handleChange = e => {
        const name = e.target.name
        const value = e.target.value

        this.updateTaskState(name, value)
    }

    handleSelectOpenClose = e => {
        e.stopPropagation()

        e.currentTarget.classList.toggle(stylesFormControl.selectVisible)
    }

    handleDropdownOpenClose = e => {
        e.stopPropagation()

        e.currentTarget.nextSibling.classList.toggle(stylesFormControl.dropdownVisible)
    }
    
    handleTaskCategoryChange = e => {
        const value = e.target.innerText
        const selectEl = e.currentTarget.parentElement.parentElement.parentElement.firstChild.firstChild
        
        if (value) {
            selectEl.setAttribute("placeholder", value)
        
            this.setState({
                ...this.state,
                task: {
                    ...this.state.task,
                    category: value
                }
            })
        }
    }

    handleCategoryChange = (category) => {
        this.setState({
            categorySelected: category
        })
    }

    openCloseForm = (form, state) => {

        this.setState({
            [form]: state
        })
    }

    CurrentView = (props) => {
        const location = GetCurrentLocation()
        const { pathname } = location
        const splitLocation = pathname.split("/")
    
        let isDown = false
        let startX
        let scrollLeft
    
        const handleMouseDown = (e) => {
            isDown = true
            startX = e.pageX - props.slider.current.offsetLeft
            scrollLeft = props.slider.current.scrollLeft
        }
    
        const handleMouseLeave = () => {
            isDown = false
        }
    
        const handleMouseUp = () => {
            isDown = false
        }
    
        const handleMouseMove = (e) => {
            e.preventDefault()
    
            if (!isDown) {
                return
    
            } else {
    
                const x = e.pageX - props.slider.current.offsetLeft
                const walk = (x - startX) * 1
                props.slider.current.scrollLeft = scrollLeft - walk
            }
        }
    
        return (
            <>
                <Container className={`grid-view ${stylesHelpers.container}`}>
                    <Container className="grid-view-header">
                        <List className="tasks-categories">
    
                            {
                                categories.map(category => {
                                    
                                    return (
                                        <ListItem 
                                            key={category.id} 
                                            className={category.link === splitLocation[2] ? "active" : splitLocation[3] === category.link ? "active" : ""} 
                                        >
                                        <Link to={`/tasks/all/${category.link}` === `/tasks/all/all` ? `/tasks/all` : `/tasks/all/${category.link}`}>
                                            <Button id={category.id} className={`${stylesButton.medium} btn-category`} onClick={() => props.onClick(category.type)}>                        
                                                {category.type}
                                            </Button>
                                        </Link>
                                        </ListItem>
                                    )
                                })
                            }
    
                        </List>
    
                        <Button className={`${stylesButton.small} ${stylesButton.bgGrey} btn-add-task`}
                            onClick={() => this.openCloseForm("isActiveAddTaskForm", true)}
                        >
                            <SvgIcon path={addItemIconPath} />
                        </Button>
                    </Container>
    
                    <ScrollableContainer
                        ref={props.slider}
                        onMouseDown={(e) => handleMouseDown(e)}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={(e) => handleMouseMove(e)}
                        component={<this.ShowDatesAndTasks state={props.state} />}
                    />
                </Container>
            </>
        )
    }

    CreateTaskForm = () => {
        const dispatch = UseDispatch()

        const validateForm = new ValidateForm()
    
        return (
            <Overlay>
                <Form 
                    className={`${stylesForm.form} form-create-task ${stylesHelpers.flex} ${stylesHelpers.fdC} ${stylesHelpers.aiC}`}     
                    onSubmit={(e) => {
                        e.preventDefault()
                        // this.handleSubmit(e, dispatch)
                        validateForm.formToValidate(currentOpenedForm("create-task"))
                    }}
                    >
                    <Button type="button" className={`${stylesButton.small} ${stylesButton.bgGrey} form-close-btn`}
                        onClick={() => this.openCloseForm("isActiveAddTaskForm", false)}
                    >
                        <SvgIcon path={closeIconPath} />
                    </Button>
                    <HeadingTwo className={stylesHelpers.mb3} title="Create task" />
    
                        <Container className={`form-controls ${stylesFormControl.medium}`}>
                            <FormControl text="Title" name="name">
                                <Input name="name" type="text" className="input" placeholder="Title" value={this.state.task.title} onChange={this.handleChange}></Input>
                            </FormControl>
                        </Container>

                        <Container className={`form-controls ${stylesFormControl.medium} ${stylesHelpers.mt3}`}>
                            <FormControl text="Password" name="password">
                                <Input name="password" type="text" className="input" id="passwordInput" placeholder="Password" onChange={this.handleChange}></Input>
                            </FormControl>
                        </Container>
    
                        <Container className={`form-controls ${stylesFormControl.medium} ${stylesHelpers.flex} ${stylesHelpers.aiC} ${stylesHelpers.jcSb} ${stylesHelpers.mt3}`}>
                            <FormControl text="Date" name="date" className={`${stylesFormControl.medium} ${stylesHelpers.mr1}`}>
                                <Input name="date" type="text" className="input" placeholder={this.state.task.date} value={this.state.task.date} onChange={this.handleChange}></Input>
                            </FormControl>
                            <Select data={categoriesData} placeholderText="Choose category" className={stylesFormControl.medium} icon={arrowIconPath} onClick={e => {
                                this.handleSelectOpenClose(e)
                                this.handleTaskCategoryChange(e)
                            }} />
                        </Container>
    
                        <Button type="submit" className={`${stylesButton.large} ${stylesButton.bgLightBlue} ${stylesHelpers.mt3}`}>
                            Create task
                        </Button>
                </Form>
            </Overlay>
        )
    }



    DefaultListData = (props) => {
        const selector = UseSelector()
        const dispatch = UseDispatch()
    
        return (
            selector.tasks.map(task => {
                const { id, name, date } = task
        
                if (date === props.date) {
                    
                    return (
                        <ListItem key={id} className="task-item">
                            <Checkbox color="red" />
                            <Small 
                                text={name} 
                                className={`task-title ${stylesHelpers.ml1}`} 
                                contentEditable={true} 
                                onKeyUp={e => {
                                    this.enableSave(e, name)
                                }} 
                            />
                            <SvgIcon path={saveIconPath} width="20px" height="18px" className="save-icon" onClick={e => this.saveTaskChanges(e, id, selector, dispatch, e.currentTarget.parentElement.firstChild.nextSibling.innerText)} />
                            <Button 
                                className={`${stylesButton.smallest} btn-task-menu`}
                                onClick={e => {
                                    this.handleDropdownOpenClose(e)
                                }}
                            >
                                <SvgIcon path={dotsIconPath} width="12px" height="4px" />
                            </Button>
                            <Dropdown data={taskDropdownData} className="task-dropdown" onClick={() => this.deleteTask(id, selector, dispatch)} />
                        </ListItem>
                    )
                }
    
                return null
            })
        )
    }



    ShowDatesAndTasks = (props) => {
        const dates = createDates()
    
        return (
            <List className="dates">
                {
                    dates.map((d, index) => {
                        const { month, date } = d
    
                        return (
                            <ListItem key={index}>
                                <Small text={date} className="date" />
                                <List className="tasks-list">
                                    {
                                        window.location.pathname === "/tasks/all" ? 
                                        <this.DefaultListData date={date} /> : 
                                        <Routes>
                                            <Route path="design" element={<this.ListData date={date} state={props.state} />} />
                                            <Route path="mobileapps" element={<this.ListData date={date} state={props.state} />} />
                                            <Route path="graphicdesign" element={<this.ListData date={date} state={props.state} />} />
                                            <Route path="prototyping" element={<this.ListData date={date} state={props.state} />} />
                                        </Routes>
                                    }
                                </List>
                                <Small text={month} className="month" />
                            </ListItem>
                        )
                    })
                }
            </List>
        )
    }



    ListData = (props) => {

        return (
            
            props.state.tasks.map(task => {
                const { id, name, date } = task
    
                if (date === props.date) {
                    
                    return (
                        <ListItem key={id} className="task-item">
                            <Checkbox color="red" />
                            <Small text={name} className={stylesHelpers.ml1} />
                            <Button className={`${stylesButton.smallest} btn-task-menu`}>
                                <SvgIcon path={dotsIconPath} width="12px" height="4px" />
                            </Button>
                        </ListItem>
                    )
                }
    
                return null
            })
        )
    }
}



export default Tasks