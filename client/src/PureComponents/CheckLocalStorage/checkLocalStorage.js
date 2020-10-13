import React from 'react'

import API from "../../Utils/API"

export default async function checkLocalStorage() {
    let token = localStorage.getItem("auth-token");
        //When empty Null or undefined set token to empty string and set empty token
        if (token === null) {
            localStorage.setItem("auth-token", "");
            token = "";
        }
        //data null then config header which is object 
        const header = { headers: { "x-auth-token": token } }
        const tokenRes = await API.tokenIsvalid(null, header);

        //If true which is boolean value we get back from server
        if (tokenRes.data) {
            const employeeRes = await API.employee(header)
            return employeeRes;
        };

}
