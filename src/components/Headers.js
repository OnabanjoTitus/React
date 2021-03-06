import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {pathString} from "../helpers"
import Button from './reusables/Button'


const styles={
    justifycontent:'space-between',
    display:'flex'
}

const Headers = () => {
 let location = useLocation();
 let history = useHistory();

 const goToRoute = () => {
     if(location.pathname==="/auth/login"){
         history.push("/auth/register") 
     }else{
         history.push("/auth/login")
     }
 }

 return(
     <div style={styles}>
            <div>Header</div>
            <Button color="black" text={location.pathname==='/auth/login'?'register':'login'} width="40%" outline={true} action={goToRoute}/>
     </div>
 )

}

export default Headers
