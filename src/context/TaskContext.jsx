import { createContext, useEffect, useState } from "react"
import {task as data} from "../data/task"


export const TaskContext = createContext();


export function TaskContextProvider (props){
    
    const [tasks,setTasks] = useState([]);
    
    useEffect(() => {
    setTasks(data)
  },[])
    const createTask = (taskTitle) =>{
    setTasks([...tasks,{
        id: tasks.length,
        title: taskTitle.title,
        description: taskTitle.description
        }])
    }
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId))
    }
    return(
        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }}>{props.children}</TaskContext.Provider>
    )

}