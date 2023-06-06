// import React from 'react'
import { FaTimes } from 'react-icons/fa'



const Task = ({ task, onDeleteTask, onToggleReminder }) => {
  const iconStyle = {
    color: 'red',
    cursor: 'pointer',
  }

  return (
    <div 
      className={`task ${ task.reminder? 'reminder' : ''}`} 
      onDoubleClick={() => onToggleReminder(task.id)}>
      <h3>
        {task.text} 
        <FaTimes 
          style={iconStyle}  
          onClick={() => onDeleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>

    </div>
  )
}

export default Task