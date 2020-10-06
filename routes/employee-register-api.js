const { Employee } = require("../models")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../config/middleware/auth")

module.exports = function (app) {

    //API for registering employee initially
    app.post("/employee/register", async function (req, res) {

        try {
            let { email, password, passwordCheck, displayName } = req.body;
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
            if (!displayName) {
                displayName = email
            }

            const salt = await bcrypt.genSalt(10);
            const passworddHash = await bcrypt.hash(password, salt)

            const newEmployee = new Employee({
                email,
                password: passworddHash,
                displayName
            });

            const saveEmployee = await newEmployee.save();
            res.json(saveEmployee)

        } catch (err) {
            res.status(500).json({ error: err.message })

        }
    })

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
            console.log(token)
            res.json({
                token,
                employee: {
                    id: employee._id,
                    displayName: employee.displayName,
                    email: employee.email
                }
            })

        } catch {
            res.status(500).json({ error: err.message })
        }

    })


    app.delete("/employee/delete", auth, async function (req, res) {

        console.log(req.employee)
        try {
            const deleteEmployee = await Employee.findByIdAndDelete(req.employee)
            res.json(deleteEmployee);

        } catch {
            res.status(500).json({ error: err.message })

        }

    })

    app.post("/employee/tokenIsValid", async function (req, res) {

        console.log("inside token is valid")
        try {
            const token = req.header("x-auth-token");
            if (!token)
                return res.json(false)
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

    app.get("/employee", auth, async function (req, res) {
        console.log("inside employee")
        const employee = await Employee.findById(req.employee)
        console.log(employee)
        res.json({
            displayName: employee.displayName,
            email: employee.email,
            id: employee._id
        })

    })

    app.get("/allemployees", async function (req, res) {


        console.log("inside all employees")
        const employees = await Employee.find()
        console.log(employees)

        res.json(employees)

        // const employee=await Employee.findById(req.employee)
        // res.json({
        //     displayName:employee.displayName,
        //     email:employee.email,
        //     id:employee._id
        // })

    })

    //Update employee details
    app.put("/employee/details", async function (req, res) {

        console.log("inside  employees detail")
        console.log(req.body)
        const { name, workType, jobTitle, experience, contactNumber, description, skills } = req.body

        console.log(name)

        try {
            console.log("inside try block")

            const employee = await Employee.findOneAndUpdate(
               {_id: req.body.id},
                {
                    name: name,
                    workType: workType,
                    jobTitle: jobTitle,
                    experience: experience,
                    contactNumber, contactNumber,
                    description: description,
                    skills: skills

                })

            console.log(employee)
        } catch (err) {
            res.status(500).json({ error: err.message })

        }


    })

    //Find employee details and populate
    app.get("/employee/currentdetails/:id", async function (req, res) {

        console.log("inside get  employees detail")
        console.log(req.params.id)


        try {
            console.log("inside try block")

            const employeeDetails = await Employee.findById(
                { _id: req.params.id },
            )

            console.log(employeeDetails)
            res.json(employeeDetails)
        } catch (err) {
            res.status(500).json({ error: err.message })

        }


    })
}


