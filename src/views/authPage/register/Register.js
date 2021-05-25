import React, { useEffect }  from 'react'
import Button from '../../../components/reusables/Button'
import Input from '../../../components/reusables/Input'

const Register = () => {
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
    return (
        <div>
               <h5>Welcome</h5>
        <div className="loginContainer">
             <Input label="email" getData={getData} datakey="username" icon="email"/>
             <Input label="username" getData={getData} datakey="username" icon="person"/>
             <Input label="password" getData={getData} datakey="username" icon="lock"/>
             <Input label="confirm password" getData={getData} datakey="password" icon="lock"/>
        </div>

        <div className='loginBtn'>
            <Button color='black' text="register" width="100%" outline={false} action={logData} key=""/>
        </div>
        </div>
    )
}

export default Register
