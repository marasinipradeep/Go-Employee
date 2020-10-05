const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Employee collection and inserts the employees below

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/employeeConnectingSystem"
);

const employeeeSeed = [
    {
        email: "Bryan-Hocking@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Bryan Hocking",
        slug: "Bryan-Hocking",
        work: "Coffe Maker",
        jobTitle: "Coffe Maker",
        experience: "3-years",
        contactNumber: "0420719902",
        description: "Have worked as barista.Can make all the flavaour of coffe.Can work in busy environment",
        skills: "Capacino",
        images: "../images/employee.jpg"

    },

    {
        email: "marasinipradeep@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Pradeep Marasini",
        workType: "Full stack web developer",
        jobTitle: "Full Stack Web Developer",
        experience: "3-years",
        contactNumber: "0420719901",
        description: "Full Stack Developer with a background in electronics and communication engineering utilising experience in banking / payment application, embedded system.",
        skills: "Logo design",
        images: "../images/employee.jpg"
    }
];

db.Employee.remove({})
    .then(() => db.Employee.collection.insertMany(employeeeSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
