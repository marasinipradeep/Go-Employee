import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"


//Importing Styles
import './App.css';
import "./style.css"

//Importing Components

import Header from "./Components/Header/Header";
import Login from "./Components/auth/Login";
import Register from "./Components/auth/Register";

//Importing pages
import Home from "./Components/Pages/Home/Home"



//Importing employee login UserContext and employees context EmployeeProvider
import UserContext from "./context/UserContext";


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });
  return (
    <Router>
      <UserContext.Provider value={{ userData, setUserData }}>
     
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
