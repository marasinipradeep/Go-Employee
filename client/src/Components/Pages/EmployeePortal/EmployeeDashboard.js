import React,{useContext} from 'react'
import {useHistory} from "react-router-dom"

import UserContext from "../../../context/UserContext"

const  EmployeeDashboard=()=> {

     //When we useContext we get setvalue in so destructure the data from the UserContext which is provideded from provider
     const { userData, setUserData } = useContext(UserContext)

     //useHistory gives result in an array
    const history = useHistory();

    const logout = () => {
        setUserData({
            token:undefined,
            employee:undefined

        });
        localStorage.setItem("auth-token","")
        history.push("/")
      
    }
    console.log("inside employee dashboard")
    return (
        <div>
       <div>I am employee dashboard</div>
       <button onClick={logout}>Logout</button>
       </div>
    )
}

export default EmployeeDashboard;
