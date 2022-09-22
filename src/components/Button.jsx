import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <div className='button'>
        <button onClick={onClick}> {children} </button>
    </div>
  )
}

export default Button