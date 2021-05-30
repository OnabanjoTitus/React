import React from 'react'
import { useHistory} from 'react-router-dom'


import SubmitButton from './reusables/SubmitButton'

const MainPage = () => {
    const mainPageStyle={
        padding:"10px",
        margin:"1rem",
    }

    let history = useHistory();
    const goToRoute = () => {
            history.push("/login")
    }
    const goToRoute2 = () => {
     history.push("/register") 
    }

    return (
        <div>
        <div style={mainPageStyle}>
        <SubmitButton color='blue' text={'LOGIN'} action={goToRoute} />
        </div>
        <div style={mainPageStyle}>
        <SubmitButton color='blue' text={'SIGN-UP'} action={goToRoute2} />
        </div>
        </div>
    )
}

export default MainPage
