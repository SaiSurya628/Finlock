
import React from "react";
import { Navigate} from "react-router-dom";
import { BiUser } from "react-icons/bi";

import Cookies from 'js-cookie';

const HomePage=()=>{

    const user=localStorage.getItem("userdetails");

   const jwtToken= Cookies.get("jwtToken")
    if(jwtToken===undefined){
   return <Navigate to="/login" />
    }
    else{
    return(
        <div>
            <div className="main">
       
          <div className="design">  
          <BiUser className="icon"/></div>
          <h1 className="head">Welcome!</h1>
          <h1>{user}</h1>
          <p>Let's connect to your workspace. <br/>
          please enter your email to continue.</p>
       
         </div>
        </div>
    
    )
    }
}
    


export default HomePage