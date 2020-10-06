import React, { useEffect } from 'react';
import FindEmployee from '../FindEmployee/FindEmployee';
import API from "../Utils/API"
import { useEmployeeContext } from "../Utils/EmployeeContext"
import { GET_ALL_EMPLOYEE_DETAILS } from "../Utils/Actions"
import './EmployeeList.css'


function EmployeeList() {

    const [state, dispatch] = useEmployeeContext();
    useEffect(() => {
        API.getAllEmployee().then(items => {
            dispatch({
                type: GET_ALL_EMPLOYEE_DETAILS,
                allEmployee: items.data
            })
        })

    }, [])


    if (state.employees.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately No employees matched your search parameters</h3>

            </div>
        );
    }
    return (
        <section className="employeeslist">
            <div className="employeeslist-center">
                {state.employees.map(item => {
                    return <FindEmployee key={item.id} employee={item} />;
                })}
            </div>
        </section>
    );
}

export default EmployeeList;
