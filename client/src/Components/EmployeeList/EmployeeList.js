import React,{useEffect} from 'react';
import FindEmployee from '../FindEmployee/FindEmployee';

import './EmployeeList.css'

import Axios from 'axios';

import {useEmployeeContext} from "../Utils/EmployeeContext"




//function EmployeeList({ employees }) {
    function EmployeeList() {

    const [state,dispatch]=useEmployeeContext();

    function formatData(items) {
        console.log("format data")

        let tempItems = items.data.map(item => {
            console.log(item)
            // let id = item.sys.id
            let id = item._id
           // let images = item.images.map(image => image.fields.file.url);
    
            let employee = { ...item,id };
            return employee;
        });
        return tempItems;
    }

    useEffect(() => {
        Axios.get("http://localhost:8080/allemployees/").then(items => {
            console.log("inside useeffect employee Provider")
            console.log(items.data)
            dispatch({type:})


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
