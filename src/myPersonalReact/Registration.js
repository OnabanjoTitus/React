import React from 'react'
import InputingFields from './components/reusables/InputingFields'
import PasswordingFields from './components/reusables/PasswordingFields'
import SubmitButton from './components/reusables/SubmitButton';

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
            

           
              
        </div>
    )
}

export default Registration
