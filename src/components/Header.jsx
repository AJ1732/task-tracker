// import React from 'react'
import Button from "./Button"
import PropTypes from 'prop-types'

const Header = ({ title, onShowAddTask, showAdd }) => {
  

  return (
    <header className="header">
      <h1> {title} </h1>

      <Button 
        text={showAdd? 'Close': 'Add Task' } 
        clickFunc={onShowAddTask}
        color={showAdd? 'red': 'blue'}
      />
    </header>
  )
}

Header.defaultProps = { 
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header