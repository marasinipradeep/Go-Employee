import React, {useEffect} from 'react'
import {Bar, Line, Pie} from "react-chartjs-2"

//import from Utils
import API from "../../Utils/API"
import {useEmployeeContext } from "../../Utils/EmployeeContext"
import { GET_ALL_EMPLOYEE_DETAILS} from "../../Utils/Actions"


function chart() {

   // const [state, dispatch] = useEmployeeContext();
    
    // useEffect(() => {
    //     API.getAllEmployee().then(items => {
    //         dispatch({
    //             type: GET_ALL_EMPLOYEE_DETAILS,
    //             allEmployee: items.data
    //         })
    //     })
    // }, [])


    return (
        <div className="chart">
            <Bar>

            </Bar>
            
        </div>
    )
}
export default chart