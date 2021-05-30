import React from 'react'
import InputingFields from './components/reusables/InputingFields'
import PasswordingFields from './components/reusables/PasswordingFields'
import SubmitButton from './components/reusables/SubmitButton';
import { useHistory, useLocation } from 'react-router-dom'
import {pathString} from "C:/Users/DELL/Desktop/cohort5/src/helpers.js"
const Registration = () => {
    let data={
        firstName:'',
        lastName:''
    }
    const getData=(key,value)=>{
        data[key]=value
    }
    var msg;
    var msg2;
    const mainPageStyle={
        padding:"10px",
        margin:"1rem",
    }
    const stylingThisGuy={
        backgroundColor:'brown',
        border:'solid black',
        borderradius:'2px',


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
            <h2>Registration Page On My Playful React Application</h2>
            <InputingFields label='firstName' getData={getData} datakey="firstName" word='Enter Your firstName.....'/>
            <InputingFields label='lastName' getData={getData} datakey="lastName" word='Enter Your lastName.....'/>
            <InputingFields label='UserName'/>
            <PasswordingFields label='Password' value='Enter Your password.....'/>
            <PasswordingFields label='ConfirmPassword'value='Confirm Your password.....'/>
            <div  style={mainPageStyle}>
            <SubmitButton color='black' text='Register'/>
            </div>
           <div  style={mainPageStyle}>
               Already have an account? click here to Login
           <SubmitButton color='blue' text={text==='login'?'SIGNUP':'LOGIN'} action={goToRoute} />
           </div>
            
           
              
        </div>
    )
}

export default Registration
