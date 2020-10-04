import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../../context/UserContext"
import Axios from "axios";

import API from "../Utils/API"

//import {Redirect,Route} from "react-router"

import ErrorNotice from '../misc/ErrorNotice';

export default function Login() {

    //Set state
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();


    //on submit clicked
    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginEmployee = { email, password, }

            //we get response back with token
            const loginRes = await API.employeeLogin(loginEmployee);

            setUserData({
                token: loginRes.data.token,
                employee: loginRes.data.employee
            });
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/login/employee/dashboard")
            // history.push("/")

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
                <input id="login-email" type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* Input Password */}
                <label htmlFor="login-password">Password</label>
                <input id="login-password" type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* <input type="submit" value="Login" /> */}
                <input type="submit" onClick={submit} />
            </form>

            {/* <button onClick={()=>history.push("/")}>fdfdf</button> */}

        </div>
    )
}
