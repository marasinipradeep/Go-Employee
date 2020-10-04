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
        console.log("EMPLOYE LOGIN")
        console.log(state)
        const new_state={
            ...state,
            token:action.token,
            id:action.id
        }
        console.log("new_state")
        console.log(new_state)
        return new_state

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
      
     token: undefined,
     id:"",
    // user: undefined,
    // error:"",
   
   
  });
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
