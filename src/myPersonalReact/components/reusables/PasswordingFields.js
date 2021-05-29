import React from 'react'

const PasswordingFields = ({label,value}) => {
    const inputContainer={
        position:'relative',
        marginBottom:'10px'
    }
    return (
        <div>
              <div style={inputContainer}>
            <label htmlFor="text">{label}</label>
            <input type="password" placeholder={value}></input>
        </div>
        </div>
    )
}

export default PasswordingFields
