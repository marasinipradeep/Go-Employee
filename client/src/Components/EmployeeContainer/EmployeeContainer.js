//Using Higher Order Components

import React from 'react';
import EmployeeFilter from '../EmployeeFilter/EmployeeFilter';
import EmployeeList from '../EmployeeList/EmployeeList';
import {useEmployeeContext } from '../Utils/EmployeeContext';
import Loading from '../Loading/Loading';

function EmployeeContainer() {
     const [state,dispatch] =useEmployeeContext()
     
     const { loading} = state;

   if (loading){
        return <Loading />;
    }
    return (
        <>
            <EmployeeFilter/>
            <EmployeeList/>
        </>
    );
}


// export default useEmployeeContext(EmployeeContainer);
export default (EmployeeContainer);