import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const month =  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];

  const date = new Date()
  const todayMonth = month[date.getMonth()]
  const todayDate = date.getDate()
  const todayHour = date.getHours()
  const todayMinute = date.getMinutes()

  const minute = () => {
   return todayMinute >= 10? todayMinute : `0${todayMinute}`
  }
  const meridiem = () => {
   return todayHour >= 12? 'pm' : 'am'
  }
  

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Welcome to Task Tracker',
        day: `${todayMonth} 
              ${todayDate}th at 
              ${todayHour}:${minute()}${meridiem()}`,
        reminder: true,
      },
    ]
  )
  //Toggle AddTask Component
  const [showAddTask, setShowAddTask] = useState(false)
  const show = () => setShowAddTask(!showAddTask)

  //Add Task
  const addTask = (newTask) => {
    // const newTask = {id, ...taskObj}
    // console.log(newTask);

    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ?
        {...task, reminder: !task.reminder} :
        task
      )
    )
    console.log();
  }

  return (
    <>
      <div className='container'>
        <Header onShowAddTask={show} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}

        { tasks.length == 0 ? 
          'No Tasks' :
          <Tasks 
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder} 
          />
          }
      </div>
    </>
  )
}

export default App
