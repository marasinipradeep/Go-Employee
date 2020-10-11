import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
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
import AddEmployeeDetails from "./Components/AddEmployeeDetails/AddEmployeeDetails"

//Importing pages
import Home from "./Components/Pages/Home/Home"
import FindEmployee from './Components/Pages/Employee'
import SingleEmployee from './Components/Pages/SingleEmployee/SingleEmployee';

//Import chat component
import Join from './Chat-Component/Join/Join';
import Chat from './Chat-Component/Chat/Chat';

//Importing employee login UserContext and employees context EmployeeProvider
// import UserContext from "./context/UserContext";
import { EmployeeProvider, useEmployeeContext } from "./Components/Utils/EmployeeContext";

import { SET_TOKEN } from "./Components/Utils/Actions"

let token = localStorage.getItem("auth-token");

function App() {
  const history =useHistory();
  //const [state, dispatch] = useEmployeeContext();
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  })

  // useEffect requires function as parameters,has dependency list[] which is an array,when state changes rerender the Effect
  // If array is empty just going to run once.
  // So this basically function that runs when app starts.Downside cant have asynchrouns function.

  useEffect(() => {
    console.log("inside use effect")

    const checkLoggedIn = async () => {
     // let token = localStorage.getItem("auth-token");//When empty Null or undefined
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
        //  dispatch({type:SET_TOKEN,token:token,user:employeeRes.data})
        console.log(employeeRes.data)
         setUserData({
           token,
           employee: employeeRes.data,
         });

      }
    };
    checkLoggedIn();
  }, []);

  const PublicRoute = ({ component: Component, ...rest }) => {
    return (
      <Route {...rest} component={(props) => (
        <>
          <Header /> {/* HEADER ALWAYS VISIBLE */}
          <Component {...props} />
        </>

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
      <EmployeeProvider value={{userData,setUserData}}>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute exact path="/employee" component={FindEmployee} />
          <PublicRoute exact path="/employees/:id" component={SingleEmployee} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <EmployeeRoute exact path="/login/employee/dashboard" component={EmployeeDashboard} />

          <EmployeeRoute exact path="/employee/details" component={AddEmployeeDetails} />


          <Route exact path="/join" component={Join} />
          <Route path="/chat" component={Chat} />

        </Switch>
      </EmployeeProvider>

    </Router>
  );


}


//Store the token in application local storage
//In app component figure out if there is token in local storage if there is a token get info and login the user
//useEffect- Any effect that is happening outside of the your component eg:-making request to backend login and logout

export default App;
