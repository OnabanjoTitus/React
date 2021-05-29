import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {pathString} from "C:/Users/DELL/Desktop/cohort5/src/helpers.js"

import SubmitButton from './reusables/SubmitButton'

const MainPage = () => {
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
        <div>
        <div style={mainPageStyle}>
        <SubmitButton color='blue' text={text==='login'?'SIGNUP':'LOGIN'} action={goToRoute} />
        </div>
        </div>
    )
}

export default MainPage
