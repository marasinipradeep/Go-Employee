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
  saveEmployeeDetails: function(employeeDetails) {
    return axios.put("/employee/details", employeeDetails);
  },

  // Get  employee details
  getAllEmployee: function() {
  return axios.get("/allemployees/");
  },

  // Get all employee 
  getEmployeeDetails: function(id) {
    return axios.get("/employee/currentdetails/"+id);
  },

  // Save and update employee details
  setEmployeeOnline: function(id) {
    return axios.put("/employee/isOnline", id);
  },
 
};
