import React from 'react'
import './button.css'

const Button = props => {
  let classes = 'button'
  classes += props.operation ? ' button-operation' : ''
  classes += props.double ? ' button-double' : ''
  classes += props.triple ? ' button-triple' : ''

  return (
    <button
      onClick={ () => props.click(props.label) }
      className={classes}>
      {props.label}
    </button>
  )
}

export default Button