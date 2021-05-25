


const Button =({color,text,width,outline,action})=>{
    
    const borderOutline=`1px solid ${color}`

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
        borderRadius:'4px'
    }
      
    return(
        <button style={buttonStyle} onClick={action}>
             {text}
        </button>
    )
}

Button.defaultProps={
    color:"black"
}

export default Button
