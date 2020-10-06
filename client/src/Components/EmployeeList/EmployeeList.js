import React, { useEffect } from 'react';
import FindEmployee from '../FindEmployee/FindEmployee';
import './EmployeeList.css'
import Axios from 'axios';

import { useEmployeeContext } from "../Utils/EmployeeContext"
import { GET_EMPLOYEE_DETAILS } from "../Utils/Actions"


//function EmployeeList({ employees }) {
function EmployeeList() {

    const [state, dispatch] = useEmployeeContext();



    useEffect(() => {
        Axios.get("http://localhost:8080/allemployees/").then(items => {
            console.log("inside useeffect employee Provider")
            console.log(items.data)
            dispatch({
                type: GET_EMPLOYEE_DETAILS,
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
