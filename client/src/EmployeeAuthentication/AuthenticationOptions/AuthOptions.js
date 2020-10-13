import React from 'react'
//Hook that allows use to react with history that happend in url bar
import { useHistory } from 'react-router-dom'

//import from utils
import { LOADING, SET_TOKEN } from '../../Utils/Actions';
import { useEmployeeContext } from "../../Utils/EmployeeContext"

export default function AuthOptions() {
    //When we useContext we get setvalue in so destructure the data from the UserContext which is provideded from provider
    const { state, dispatch } = useEmployeeContext()

    //useHistory gives result in an array
    const history = useHistory();
    const register = () => history.push("/register")
    const login = () => history.push("/login")

    const logout = () => {
        dispatch(
            {
                type: SET_TOKEN,
                token: undefined
            })
        localStorage.setItem("auth-token", "")
        history.push("/login")

    }
    return (
        <nav className="auth-options" >

            {/* Conditional rendering, userData.employee checks the value of employee if exist get logout button*/}
            {userData.employee ? (
                <button onClick={logout}>Log Out</button>
            ) : (
                    <>
                        <button onClick={register}>Register</button>
                        <button onClick={login}>Log in</button>
                    </>
                )}

        </nav>
    )
}

//Keep track of currently logged user.If uesr is logged in no need of register button
