import React from 'react'

const SubmitButton = ({color,text,action}) => {
    const buttonXteristics={
        cursor:'pointer',
        backgroundColor:color,
        color:'#fff',
        border:0,
        display:'block',
        fontSize:'16px',
        padding:'15px',
        width:'100%',
        textTransform:'upperCase',
        borderRadius:'4px'
    }

    return (
        <div>
          
            <button  style={buttonXteristics} onClick={action}>{text}</button>
        </div>
    )
}

export default SubmitButton
