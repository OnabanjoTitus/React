import React, { useEffect } from 'react'
import Button from '../../../components/reusables/Button'
import Input from '../../../components/reusables/Input'
import MoreButton from '../../../components/reusables/MoreButton'
const Login =()=>{
    let data={
        username:'',
        password:''
    }
    const getData=(key,value)=>{
        data[key]=value
    }
    const logData=()=>{
        console.log(data)
    }

    useEffect(()=>{
    console.log("Login: i mounted")
        return () => 
        console.log("Login: i unmounted")
    },[]
    )
    
    return(
        <div>
            <h5>Welcome</h5>
        <div className="loginContainer">
             <Input label="username" getData={getData} datakey="username" icon="email"/>
             <Input label="password" getData={getData} datakey="password" icon="person"/>
        </div>

        <div className='loginBtn'>
            <Button color='black' text="login" width="100%" outline={false} action={logData} key=""/>
        </div>
    </div>
    )
}

export default Login
