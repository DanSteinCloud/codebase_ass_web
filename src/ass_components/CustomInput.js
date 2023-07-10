import React from 'react'

const CustomInput = () => {
    const {type, name, className, placeholder} = props
  return (
    <div>
      <input 
        type={type} 
        name={name} 
        className={`form-control ${className}`} 
        placeholder={placeholder}>
      </input>
    </div>
  )
}

export default CustomInput