import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Importing Styles
import './App.css';
import "./style.css"

//Importing from HomeComponents
import Header from "./HomeComponents/Header/Header";

//importing from employeeAuthentication
import Login from "./EmployeeAuthentication/Login/Login";
import Register from "./EmployeeAuthentication/Register/Register";

//import from employeeComponents
import AddEmployeeDetails from "./EmployeeComponents/AddEmployeeDetails/AddEmployeeDetails"


//Importing pages
import Home from "./Pages/HomePage/Home"
import FindEmployee from './Pages/FindEmployeePage/Employee'
import SingleEmployee from './Pages/ConnectedEmployeePage/SingleEmployee';
import EmployeeDashboard from "./Pages/EmployeeDashboardPage/EmployeeDashboard"

// //Import chat component
// import Join from './ChatComponents/Join/Join';
// import Chat from './ChatComponents/Chat/Chat';

// import Model from './PureComponents/PopUpDialogue/PopUpDialogue';


//import from Utils
import { EmployeeProvider } from "./Utils/EmployeeContext";

function App() {
  
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

      <EmployeeProvider>
        <Switch>
          <PublicRoute exact path="/" component={Home} />
          <PublicRoute exact path="/employee" component={FindEmployee} />
          <PublicRoute exact path="/employees/:id" component={SingleEmployee} />
          <PublicRoute exact path="/login" component={Login} />
          <PublicRoute exact path="/register" component={Register} />
          <EmployeeRoute exact path="/login/employee/dashboard" component={EmployeeDashboard} />
          <EmployeeRoute exact path="/employee/details" component={AddEmployeeDetails} />


          {/* <Route exact path="/join" component={Join} />
          <Route path="/chat" component={Model} /> */}

        </Switch>
      </EmployeeProvider>

    </Router>
  );


}


//Store the token in application local storage
//In app component figure out if there is token in local storage if there is a token get info and login the user
//useEffect- Any effect that is happening outside of the your component eg:-making request to backend login and logout

export default App;
