import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

//Importing Components
import Header from "./Components/Header/Header";

//Importing pages
import Home from "./Components/Pages/Home/Home"

//Importing Styles
import './App.css';
import "./style.css"

function App() {
  return (
    <Router>
       <Header />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
