import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
// import UserContext from "../../context/UserContext"
import {useEmployeeContext} from "../Utils/EmployeeContext"
import ErrorNotice from '../misc/ErrorNotice';

import API from "../Utils/API"

export default function Register() {
    //Set state
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    // const { setUserData } = useContext(UserContext);
    const { setUserData } = useEmployeeContext();
    const history = useHistory();

    //onSubmit clicked
    const submit = async (e) => {
        e.preventDefault();
        try {
            const newEmployee = { email, password, passwordCheck, displayName }
            await API.registerEmployee(newEmployee);

            //we get response back with token
            const loginRes = await API.employeeLogin({email, password});

            //Setting employee data after getting back from response
            setUserData({
                token: loginRes.data.token,
                employee: loginRes.data.employee
            });

            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/login/employee/dashboard")
        } catch (err) {
            //&& operator to set the error message.Executes when both sides true before and after and operator
            err.response.data.msg && setError(err.response.data.msg)

        }
    };
    return (
        <div>
            <h2 className="page">Register</h2>
            {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />)}
            <form className="form" onSubmit={submit} >
                {/* Input Email */}
                <label htmlFor="register-email">Email</label>
                <input id="register-email" type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Input Password */}
                <label htmlFor="register-password">Password</label>
                <input id="register-password" type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input type="password" placeholder="Verify password"
                    onChange={(e) => setPasswordCheck(e.target.value)}
                />

                {/* Display Name */}
                <label htmlFor="register-display-name">Display Name</label>
                <input id="register-display-name" type="text"
                    onChange={(e) => setDisplayName(e.target.value)}
                />
                <input type="submit" value="Register" />
            </form>
        </div>
    )
}
