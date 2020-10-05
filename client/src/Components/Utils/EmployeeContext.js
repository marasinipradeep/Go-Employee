import React, { createContext, useContext, useReducer } from "react";

import { LOGOUT, EMPLOYEE_LOGIN, SAVE_EMPLOYEE_DETAILS, LOADING, GET_EMPLOYEE_DETAILS, SET_TOKEN } from "./Actions"
//export default createContext(null);

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
        fields: {
          name: action.name,
          workType: action.type,
          jobTitle: action.jobTitle,
          experience: action.experience,
          contactNumber: action.contactNumber,
          description: action.description,
        }
      }

    case GET_EMPLOYEE_DETAILS:

      return {
        ...state,
        fields: {
          name: action.name,
          workType: action.workType,
          jobTitle: action.jobTitle,
          experience: action.experience,
          contactNumber: action.contactNumber,
          description: action.description,

        }
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

    employee: {
      _id: "",
      loading: false,
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
    }

  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useEmployeeContext = () => {
  return useContext(EmployeeContext);
};

export { EmployeeProvider, useEmployeeContext };
