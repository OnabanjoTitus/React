import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import Button from '../../../components/reusables/Button'
import Input from '../../../components/reusables/Input'
import MoreButton from '../../../components/reusables/MoreButton'
const Login =()=>{
    let data={
    
    }
    const getData=(key,value)=>{
        data[key]=value
    }
    const logData=()=>{
        console.log(data)
    }
    const history=useHistory()
    const[loading,setLoading]=useState(false)
    const loginUser = async() =>{
        setLoading(true)
        try{
            let res=await fetch(`http://localhost:5000/users/?email=${data.email}&password=${data.password}`)
             .catch(err=> console.error(err))
            let result=await res.json()
            setLoading(false)
            console.log(result)
            if(result.length>0)history.push("/posts")
        }catch(error){
            setLoading(false)
            console.error(error)
        }
    }
   
    useEffect(()=>{
    console.log("Login: i mounted")
        return () => 
        console.log("Login: i unmounted")
    },
    )
    
    return(
        <div>
            <h5>Welcome</h5>
        <div className="loginContainer">
             <Input label="email" getData={getData} datakey="email" icon="email"/>
             <Input label="password" getData={getData} datakey="password" icon="person"/>
        </div>

        <div className='loginBtn'>
            <Button color='black' btnvalue={loading?'loading':'login name'}text="login" width="100%" outline={false} action={loginUser} key=""/>
        </div>
    </div>
    )
}

export default Login
