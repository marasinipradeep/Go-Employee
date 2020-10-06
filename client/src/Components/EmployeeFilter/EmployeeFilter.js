import React from 'react';
import { useEmployeeContext } from "../Utils/EmployeeContext";
import Title from "../Pure-Components/Title/Title";

import './EmployeeFilter.css'

function EmployeeFilter() {
    const [state,dispatch] = useEmployeeContext();
    

    return (
        <section className="filter-container">
            <Title title="search Employee" />
            <form className="filter-form">
                {/*select Type*/}
                <div className="form-group">
                    <label htmlFor="type">employee type</label>
                    <select
                        name="workType"
                        id="workType"
                        className="form-control"
                        onChange={dispatch({type:"handleChange"})}
                    >
                         <option>ALL</option>
                        <option>FARM-WORKER</option>
                        <option>RESTAURANT-WORKER</option>
                        <option>CLEANING-WORKER</option>
                    </select>
                </div>
                {/*end select type*/}

            </form>
        </section>

    );
}

export default EmployeeFilter;
