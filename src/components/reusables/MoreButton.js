import React from 'react'

const MoreButton = ({color}) => {
    const buttonStyle={
        cursor:'pointer',
        backgroundColor:color,
        color:'#fff',
        border:0,
        display:'block',
        fontSize:'16px',
        padding:'15px',
        width:'100%',
        textTransform:'upperCase',
        borderRadius:'4px',
        margin:'20px',
    }

    return (
        <div>
            <button style={buttonStyle}>More signin</button>
        </div>
    )
}

MoreButton.defaultProps={
    color:"black"
}

export default MoreButton
