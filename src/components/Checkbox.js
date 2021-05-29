import React from 'react'

const Checkbox = () => {
    var msg;
    
    if(this.state.checked){
        msg='checked'
    }else{
        msg='unchecked'
    }
    return (
        <div>
            <input type="checkbox"/>
            <h3>Check box is {msg}</h3>
            
        </div>
    )
}

export default Checkbox
