import React from 'react'
import InputingFields from './reusables/InputingFields'
import PasswordingFields from './reusables/PasswordingFields'
import SubmitButton from './reusables/SubmitButton'
import { useHistory, useLocation } from 'react-router-dom'
import {pathString} from "C:/Users/DELL/Desktop/cohort5/src/helpers.js"
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
    let location = useLocation();
    let history = useHistory();
    const goToRoute = () => {
        if(text==="login"){
            history.push("/register") 
        }else{
            history.push("/login")
        }
    }
    let text = pathString(location)
    
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
           <div  style={mainPageStyle}>
            New Here? Click here to sign-up
           <SubmitButton color='blue' text={text==='login'?'SIGNUP':'LOGIN'} action={goToRoute} />
           </div>
            


        </div>
    )
}

export default Loginin
