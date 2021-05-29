import React from 'react'
import InputingFields from './reusables/InputingFields'
import PasswordingFields from './reusables/PasswordingFields'
import SubmitButton from './reusables/SubmitButton'

const Loginin = () => {
    const stylingThisGuy={
        backgroundColor:'brown',
        border:'solid black',
        borderradius:'2px',
    }
    const mainPageStyle={
        padding:"10px",
        margin:"1rem",
    } 
    return (
        <div style={stylingThisGuy}>
            <h2>
                LOGIN IN PAGE
            </h2>
                <InputingFields label="Username" word="Enter your UserName..."/>
                <PasswordingFields label="Password" word="Enter your Password..."/>
           <div  style={mainPageStyle}>
           <SubmitButton color='black' text='login'/>
           </div>
            

    
        </div>
    )
}

export default Loginin
