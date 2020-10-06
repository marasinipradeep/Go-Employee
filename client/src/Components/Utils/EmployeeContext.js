import React, { createContext, useContext, useReducer } from "react";

import {
  LOGOUT,
  EMPLOYEE_LOGIN,
  SAVE_EMPLOYEE_DETAILS,
  LOADING, GET_ALL_EMPLOYEE_DETAILS,
  SET_TOKEN, CONNECTED_EMPLOYEE,
  UPDATE_EMPLOYEE_ISONLINE
} from "./Actions"

const EmployeeContext = createContext();
const { Provider } = EmployeeContext;

const reducer = (state, action) => {
  switch (action.type) {

    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };

    case LOGOUT:
      return {
        ...state
      };

    case EMPLOYEE_LOGIN:
      return {
        ...state,
        token: action.token,
        id: action.id,
        email: action.email
      };

    case SAVE_EMPLOYEE_DETAILS:

      return {
        ...state,
        currentEmployee: action.employee
      }

      case UPDATE_EMPLOYEE_ISONLINE:
        console.log("Update isOnline")
        console.log(action.isOnline)
      return {
        ...state,
       currentEmployee:action.isOnline
        
      }

    case GET_ALL_EMPLOYEE_DETAILS:

      return {
        ...state,
        employees: action.allEmployee
      }

    case CONNECTED_EMPLOYEE:
      return {
        ...state,
        connectedEmployee: state.employees.filter((employee) => {
          return employee._id === action.id
        })
      }


    case LOADING:
      return {
        ...state,
        loading: true
      }


    default:
      return state;
  }
};

const EmployeeProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    token: undefined,
    employees: [],
    currentEmployee: {
      _id: "",
      email: "",
      isOnline: false,
      name: "",
      workType: "",
      jobTitle: "",
      experience: "",
      contactNumber: "",
      description: "",
      skills: "",
      images: ""
    },
    connectedEmployee: [],
    loading: false,


  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};

export { EmployeeProvider, useEmployeeContext };
