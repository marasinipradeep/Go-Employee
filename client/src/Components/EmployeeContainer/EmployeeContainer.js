//Using Higher Order Components

import React from 'react';
import EmployeeFilter from '../EmployeeFilter/EmployeeFilter';
import EmployeeList from '../EmployeeList/EmployeeList';
import {useEmployeeContext } from '../Utils/EmployeeContext';
import Loading from '../Loading/Loading';

function EmployeeContainer() {
     const [state,dispatch] =useEmployeeContext()
     console.log("inside employeeContainer")
   console.log(state)
     const { loading,employees } = state;

   if (loading){
        return <Loading />;
    }
    return (
        <>
            <EmployeeFilter employees={employees} />
            <EmployeeList employees={employees} />
        </>
    );
}


// export default useEmployeeContext(EmployeeContainer);
export default (EmployeeContainer);