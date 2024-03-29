import React, { useEffect } from 'react';

//import from findEmployeeComponents
import FindEmployee from '../FindEmployee/FindEmployee';

//import from Utils
import API from "../../Utils/API"
import {useEmployeeContext } from "../../Utils/EmployeeContext"
import {GET_ALL_EMPLOYEE_DETAILS, FILTER_BY_CATEGORIES} from "../../Utils/Actions"

//import employlist css
import './EmployeeList.css'


function EmployeeList() {

    const [state, dispatch] = useEmployeeContext();
    
    useEffect(() => {
        console.log(`inside useEffect list employee`)
        console.log(state)
        API.getAllEmployee().then(items => {
            dispatch({
                type: GET_ALL_EMPLOYEE_DETAILS,
                allEmployee: items.data
            })
        })
    }, [])

    useEffect(() => {
        console.log(`after secon useEffect`)
         API.getAllEmployee().then(items => {
             console.log(`after secon useEffect`)
            dispatch({
               type: FILTER_BY_CATEGORIES,
               workType:"ALL"
            })
        })
    }, [])



    if (state.employees.length === 0 || state.workerByCategories.length === 0) {
        return (
            <div className="empty-search">
                <h3>Unfortunately No employees matched your search parameters</h3>
            </div>
        );
    }
    return (
        <section className="employeeslist">
            <div className="employeeslist-center">
                {state.workerByCategories.map(item => {
                    return <FindEmployee key={item._id} employee={item} />;
                })}
            </div>
        </section>
    );
}

export default EmployeeList;
