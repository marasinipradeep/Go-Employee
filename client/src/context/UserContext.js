import React, {createContext,useContext,useReducer} from "react";

import {LOGOUT,EMPLOYEE_LOGIN} from "../Components/Utils/Actions"
//export default createContext(null);

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case LOGOUT:
    return {
      state
    };

    case EMPLOYEE_LOGIN:
        return{
            ...state,
            token:action.token,
            employee:action.employee
        }

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
     token: undefined,
     user: undefined,
     error:"",
     employee:""
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
