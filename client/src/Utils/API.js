import axios from "axios";

export default {
  //Check tokenIsvalid

  tokenIsvalid: function (data, header) {
    return axios.post("/employee/tokenIsValid", null, header);
  },

  employee: function (header) {
    return axios.get("/employee", header)
  },

  // Posts employee login
  employeeLogin: function (data) {
    return axios.post("/employee/login", data);
  },
  // Register employees with emial and password
  registerEmployee: function (newEmployee) {
    return axios.post("/employee/register", newEmployee);
  },
  // Save and update employee details
  saveEmployeeDetails: function (employeeDetails, config) {
    return axios.put("/employee/details", employeeDetails, config);
  },

  // Save and update employee details with image
  saveEmployeeImage: function (fd, config) {
    return axios.post("/employee/details/image", fd, config);
  },

  // Get  employee details
  getAllEmployee: function () {
    return axios.get("/allemployees/");
  },

  // Get all employee 
  getEmployeeDetails: function (id) {
    return axios.get("/employee/currentdetails/" + id);
  },

  // Save and update employee details
  setEmployeeOnline: function (id) {
    return axios.put("/employee/isOnline", id);
  },

};
