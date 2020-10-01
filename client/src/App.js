import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"

//Importing Styles
import './App.css';
import "./style.css"

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
