import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ text, clickFunc, color }) => {
  const AddTaskBtnStyle = {
    backgroundColor: color,
    cursor: 'pointer',
  }

  return (
    <button 
      className="btn"
      style={AddTaskBtnStyle}
      onClick={clickFunc}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  clickFunc: PropTypes.func,
}

export default Button