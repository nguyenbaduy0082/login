import React from 'react'

const Input = ({label, type, placeholder, defaultValue}) => {
  return (
    <div className='input'>
        <p>
            {label}
        </p>
        <input type={type} placeholder={placeholder} defaultValue={defaultValue}/>
    </div>
  )
}

export default Input