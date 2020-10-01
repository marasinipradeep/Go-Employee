import React, {useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";


//Importing Styles
import './App.css';
import "./style.css"

//Importing Components

import Header from "./Components/Header/Header";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";
import EmployeeDashboard from "./Components/Pages/EmployeePortal/EmployeeDashboard"

//Importing pages
import Home from "./Components/Pages/Home/Home"



//Importing employee login UserContext and employees context EmployeeProvider
import UserContext from "./context/UserContext";


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });

  //useEffect requires function as parameters,has dependency list[] which is an array,when state changes rerender the Effect
  //If array is empty just going to run once.
  //So this basically function that runs when app starts.Downside cant have asynchrouns function.
  useEffect(() => {
    console.log("inside use effect")
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");//When empty Null or undefined
      if(token ===null){
        localStorage.setItem("auth-token","");
        token ="";
      }
      const tokenRes = await Axios.post("http://localhost:8080/employee/tokenIsValid", null, 
      { headers: { "x-auth-token": token }});
     if(tokenRes.data){
       const employeeRes=await Axios.get("http://localhost:8080/employee",
       {headers:{"x-auth-token":token}
     });

     setUserData({
       token,
       employee:employeeRes.data,
     });

     }
    };
    checkLoggedIn();
  }, []);
  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login/employee/dashboard" component={EmployeeDashboard} />
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
