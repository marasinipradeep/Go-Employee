//Using Higher Order Components
import React from 'react';

//import from FindEmployee components
import EmployeeFilter from '../EmployeeFilter/EmployeeFilter';
import EmployeeList from '../EmployeeList/EmployeeList';

//import from Utils
import { useEmployeeContext } from '../../Utils/EmployeeContext';

//import from ChartComponents
import Charts from "../../ChartComponents/Chart/chart"

//import from PureComponents
import Loading from '../../PureComponents/Loading/Loading';

function EmployeeContainer() {
    const [state, dispatch] = useEmployeeContext()

    const { loading } = state;

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            {/* <Charts/> */}
            <EmployeeFilter />
            <EmployeeList />
        </>
    );
}


// export default useEmployeeContext(EmployeeContainer);
export default (EmployeeContainer);