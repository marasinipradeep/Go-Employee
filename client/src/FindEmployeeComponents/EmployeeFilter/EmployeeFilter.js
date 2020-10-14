import React, { useEffect } from 'react';

//import from Utils
import API from "../../Utils/API"
import { useEmployeeContext } from "../../Utils/EmployeeContext";
import { FILTER_BY_CATEGORIES, GET_ALL_EMPLOYEE_DETAILS } from "../../Utils/Actions"

//import from pureComponents
import Title from "../../PureComponents/Title/Title";

import './EmployeeFilter.css'

function EmployeeFilter() {
    const [state, dispatch] = useEmployeeContext();

    function filterBycategories(e) {
            dispatch(
                {
                    type: FILTER_BY_CATEGORIES,
                    workType: e.target.value
                })
    }
    
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
                        onChange={filterBycategories}
                    >
                        <option value="ALL" selected={true}>ALL</option>
                        <option value="Farm-Worker">FARM-WORKER</option>
                        <option value="Restaurant-Worker">RESTAURANT-WORKER</option>
                        <option value="Cleaners">CLEANEARS</option>
                    </select>
                </div>
                {/*end select type*/}

            </form>
        </section>

    );
}

export default EmployeeFilter;
