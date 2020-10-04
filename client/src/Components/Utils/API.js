import axios from "axios";

export default {
  // Posts employee login
  employeeLogin: function(data) {
    return axios.post("/employee/login",data);
  },
  // Register employees with emial and password
  registerEmployee: function(newEmployee) {
    return axios.post("/employee/register", newEmployee);
  },
  // Save and update employee details

  registerEmployee: function(employeeDetails) {
    return axios.post("http://localhost:8080/employee/details", employeeDetails);
  },
 
};
