import React from 'react'
import { useLocation, useRouteMatch,Switch,Route } from 'react-router-dom'
import Headers from '../../components/Headers';
import Login from './Login/Login';
import Register from './register/Register';
import { useEffect } from "react"

const AuthContainer = () => {
    let {path}=useRouteMatch();
    let location=useLocation();
    useEffect(()=>{
        console.log(location)
        
        },[location])
    return (
        <div>
            <Headers/>
            <Switch>
                <Route strict path={`${path}/login`}>
                    <Login/>
                </Route>
                <Route strict path={`${path}/register`}>
                    <Register/>
                </Route>
            </Switch>
            
        </div>
    )
}

export default AuthContainer
