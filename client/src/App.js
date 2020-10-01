import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom";
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
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("http://localhost:8080/employee/tokenIsValid", null,
        { headers: { "x-auth-token": token } });
      if (tokenRes.data) {
        const employeeRes = await Axios.get("http://localhost:8080/employee",
          {
            headers: { "x-auth-token": token }
          });

        setUserData({
          token,
          employee: employeeRes.data,
        });

      }
    };
    checkLoggedIn();
  }, []);

  const PublicRoute = ({ component: Component , ...rest})=>{
    return (
        <Route {...rest}  component={(props)=>(
            <div>
                <Header /> {/* HEADER ALWAYS VISIBLE */}
                <Component {...props} />
            </div>
        )}
        />
    )
}
const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props)=> (<Component {...props} />)}
        />
    );
};

    return (
      <Router>
       
        <UserContext.Provider value={{ userData, setUserData }}>
          {/* <Header /> */}
          <div>
            <Switch>
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute exact path="/login" component={Login} />
              <PublicRoute exact path="/register" component={Register} />
              <AdminRoute exact path="/login/employee/dashboard" component={EmployeeDashboard}/>
            </Switch>
          </div>
        </UserContext.Provider>
      </Router>
    );


}


//Store the token in application local storage
//In app component figure out if there is token in local storage if there is a token get info and login the user
//useEffect- Any effect that is happening outside of the your component eg:-making request to backend login and logout

export default App;
