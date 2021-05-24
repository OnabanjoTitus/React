import React from 'react'
import Button from '../../../components/reusables/Button'
import Input from '../../../components/reusables/Input'
import MoreButton from '../../../components/reusables/MoreButton'

const Login =()=>{
    return(
        <div>
        <Input/>
        <div className='loginBtn'>
             <Button color='purple'/>
        </div>

        <div>
            <MoreButton color='indigo'/>
        </div>
    </div>
    )
}

export default Login
