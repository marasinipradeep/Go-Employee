import React from 'react';
import { useEmployeeContext } from "../Utils/EmployeeContext";
import Title from "../Pure-Components/Title/Title";

import './EmployeeFilter.css'

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

function EmployeeFilter({ employees }) {
    const [context,dispatch] = useEmployeeContext();
    
    const {handleChange,type} = context;

    //get unique types
    let types = getUnique(employees, 'type');
    //add all
    types = ['all', ...types];


    //map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}
            </option>
        );
    });

    return (
        <section className="filter-container">
            <Title title="search Employee" />
            <form className="filter-form">
                {/*select Type*/}
                <div className="form-group">
                    <label htmlFor="type">employee type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}
                    >
                        {types}
                    </select>
                </div>
                {/*end select type*/}

            </form>
        </section>

    );
}

export default EmployeeFilter;
