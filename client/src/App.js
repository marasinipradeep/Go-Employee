import React, { useEffect, useState } from 'react';
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
import FindEmployee from './Components/Pages/Employee'
import SingleEmployee from './Components/Pages/SingleEmployee/SingleEmployee';

//Import chat component
import Join from './component/Join/Join';
import Chat from './component/Chat/Chat'

//Importing employee login UserContext and employees context EmployeeProvider
// import UserContext from "./context/UserContext";
import { EmployeeProvider, useEmployeeContext } from "./Components/Utils/EmployeeContext";
import { SET_TOKEN } from "./Components/Utils/Actions"

function App() {
  //const [state, dispatch] = useEmployeeContext();

  //useEffect requires function as parameters,has dependency list[] which is an array,when state changes rerender the Effect
  //If array is empty just going to run once.
  //So this basically function that runs when app starts.Downside cant have asynchrouns function.

  // useEffect(() => {
  //   console.log("inside use effect")

  //   const checkLoggedIn = async () => {
  //     let token = localStorage.getItem("auth-token");//When empty Null or undefined
  //     if (state.token === null) {
  //       localStorage.setItem("auth-token", "");
  //       token = "";
  //     }
  //     const tokenRes = await Axios.post("http://localhost:8080/employee/tokenIsValid", null,
  //       { headers: { "x-auth-token": token } });
  //     if (tokenRes.data) {
  //       const employeeRes = await Axios.get("http://localhost:8080/employee",
  //         {
  //           headers: { "x-auth-token": token }
  //         });

  //         console.log(employeeRes.data)

  //         dispatch({type:SET_TOKEN,token:token})

  //       // setUserData({
  //       //   token,
  //       //   employee: employeeRes.data,
  //       // });

  //     }
  //   };
  //   checkLoggedIn();
  //   console.log(state)
  // }, []);

  const PublicRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} component={(props) => (
        <div>
          <Header /> {/* HEADER ALWAYS VISIBLE */}
          <Component {...props} />
        </div>
      )}
      />
    )
  }
  const EmployeeRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        component={(props) => (<Component {...props} />)}
      />
    );
  };

  return (
    <Router>
      <EmployeeProvider>
        {/* <Header /> */}
        <div>
          <Switch>
            <PublicRoute exact path="/" component={Home} />
            <PublicRoute exact path="/employee" component={FindEmployee} />
            <PublicRoute exact path="/employees/:id" component={SingleEmployee} />
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/register" component={Register} />
            <EmployeeRoute exact path="/login/employee/dashboard" component={EmployeeDashboard} />
            <Route exact path="/chat"  component={Join}/>
            <Route exact path="/room"  component={Chat}/>
         
          </Switch>
        </div>
      </EmployeeProvider>
    </Router>
  );


}


//Store the token in application local storage
//In app component figure out if there is token in local storage if there is a token get info and login the user
//useEffect- Any effect that is happening outside of the your component eg:-making request to backend login and logout

export default App;
