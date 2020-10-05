import React, { useState, useRef } from 'react'
import { useHistory } from "react-router-dom";
import { useEmployeeContext } from "../Utils/EmployeeContext"
import {EMPLOYEE_LOGIN } from "../Utils/Actions"
import API from "../Utils/API"
import ErrorNotice from '../misc/ErrorNotice';

export default function Login() {

    const [error, setError] = useState();
    const history = useHistory();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [state, dispatch] = useEmployeeContext();
    
    //on submit clicked
    const submit = async (e) => {
        e.preventDefault();
        console.log("inside submit clicked")
        try {
           
            const loginEmployee =
            {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }

            //we get response back with token
            const loginRes = await API.employeeLogin(loginEmployee);
            dispatch({
                type: EMPLOYEE_LOGIN,
                token: loginRes.data.token,
                id: loginRes.data.employee.id,
                email: loginRes.data.employee.email
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
            <h2 className="page">Login</h2>
            {error && (<ErrorNotice message={error} clearError={() => setError(undefined)} />)}
            
            <form className="form" onSubmit={submit}>
                {/* Input Email */}
                <label htmlFor="login-email">Email</label>
                <input id="login-email" type="email" ref={emailRef}/>

                {/* Input Password */}
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password" ref={passwordRef}/>
               
                <input type="submit" onClick={submit} />
            </form>
        </div>
    )
}
