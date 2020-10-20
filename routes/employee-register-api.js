//Require Employee model from models
const { Employee } = require("../models")

//require passport hashing mechanism
const bcrypt = require("bcryptjs");

//require jsonwebtoken to handle request from front end
const jwt = require("jsonwebtoken");

//this is middleware which combined id and jwt token encodes them together
const auth = require("../config/middleware/auth");


//this is required to upload images from frontend so that backend can store and serve back again 
const uploads = require("../config/middleware/multer")

module.exports = function (app) {

    //API for registering employee initially
    app.post("/employee/register", async function (req, res) {

        try {
            let { email, password, passwordCheck } = req.body;
            if (!email || !password || !passwordCheck) {
                return res.status(400).json({ msg: "Not all field entered" })
            }
            if (password.length < 5) {
                return res.status(400).json({ msg: "Password must be at least 5 characters long" })
            }
            if (password !== passwordCheck) {
                return res.status(400).json({ msg: "Password and confirm password must match" })
            }

            const existingEmployee = await Employee.findOne({ email: email })
            if (existingEmployee) {
                return res.status(400).json({ msg: "An account with this email already exists." })
            }

            const salt = await bcrypt.genSalt(10);
            const passworddHash = await bcrypt.hash(password, salt)

            const newEmployee = new Employee({
                email,
                password: passworddHash
            });

            const saveEmployee = await newEmployee.save();
            const responseData = {
                email:saveEmployee.email,
                id:saveEmployee._id,
                msg:"Successfully registered your email address.Click on login to begin"
            }
            
            res.json(responseData)

        } catch (err) {
            res.status(500).json({ error: err.message })

        }
    })


//api for login employee in
    app.post("/employee/login", async function (req, res) {
        try {
            const { email, password } = req.body
            //Validate
            if (!email || !password) {
                return res.status(400).json({ msg: "Not all fields have been entered." })
            }

            const employee = await Employee.findOne({ email: email });
            if (!employee) {
                return res.status(400).json({ msg: "email has not been registered" })
            }

            const isMatch = await bcrypt.compare(password, employee.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Invalid Credentials." })
            }

            const token = jwt.sign({ id: employee._id }, process.env.JWT_SECRET)
           
            res.json({
                token,
                employee: {
                    id: employee._id,
                    email: employee.email
                }
            })

        } catch {
            res.status(500).json({ error: err.message })
        }

    })


    // app.delete("/employee/delete", auth, async function (req, res) {

    //     console.log(req.employee)
    //     try {
    //         const deleteEmployee = await Employee.findByIdAndDelete(req.employee)
    //         res.json(deleteEmployee);

    //     } catch {
    //         res.status(500).json({ error: err.message })

    //     }

    // })


    //api for checking token whether it is valid or not
    app.post("/employee/tokenIsValid", async function (req, res) {
        try {
            const token = req.header("x-auth-token");
            if (!token){
                return res.json(false)
            } 

            const verified = jwt.verify(token, process.env.JWT_SECRET)
            if (!verified) {
                return res.json(false)
            }

            const employee = await Employee.findById(verified.id);
            if (!employee) {
                return res.json(false)
            }
            return res.json(true);

        } catch {
            res.status(500).json({ error: err.message })

        }
    })

    //Get currently looged in users
    app.get("/employee", auth, async function (req, res) {
       
        const employee = await Employee.findById(req.employee)
        res.json({
            email: employee.email,
            id: employee._id
        })
    })

    app.get("/allemployees", async function (req, res) {
        const employees = await Employee.find({ isOnline: true })
        res.json(employees)
    })


    //Update employee details
    app.put("/employee/details", uploads.any('image'), async function (req, res) {
        const { name, workType, jobTitle, experience, contactNumber, description, skills, image } = req.body
        try {
            if (!name || !workType || !jobTitle || !experience || !contactNumber || !description || !skills) {
                return res.status(400).json({ msg: "Not all field entered" })
            }

            const employee = await Employee.findOneAndUpdate(
                { _id: req.body.id },
                {
                    name: name,
                    workType: workType,
                    jobTitle: jobTitle,
                    experience: experience,
                    contactNumber, contactNumber,
                    description: description,
                    skills: skills,
                    images: req.body.id + ".png"
                })
        } catch (err) {
            res.status(500).json({ error: err.message })

        }

    })

    //Find employee details and to populate on employee dashboard
    app.get("/employee/currentdetails/:id", async function (req, res) {

        try {

            const employeeDetails = await Employee.findById(
                { _id: req.params.id }
            )
            res.json(employeeDetails)
        } catch (err) {
            res.status(500).json({ error: err.message })

        }
    })


    //Update employee isOnline
    app.put("/employee/isOnline", async function (req, res) {
        try {
            const employee = await Employee.findOneAndUpdate(
                { _id: req.body.id },
                {
                    isOnline: req.body.isOnline,
                })
            res.json(employee)
        } catch (err) {
            res.status(500).json({ error: err.message })

        }
    })
}


