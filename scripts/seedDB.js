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
        workType: "Restaurant-Worker",
        jobTitle: "Coffe Maker",
        experience: "3 year",
        contactNumber: "0420719902",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        skills: "Capacino",
        images: "5f8626db3fc13c0743d43e99.jpg" //must match the id of employee and file extension .png
    },

    {
        email: "marasinipradeep@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Pradeep Marasini",
        workType: "Farm-Worker",
        jobTitle: "Fruit Picker",
        experience: "3 year",
        contactNumber: "0420719901",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        skills: "fruit picker",
        images: "employee.jpg"
    },

    {
        email: "saraMang@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Sara Mang",
        workType: "Cleaners",
        jobTitle: "commercial cleaner",
        experience: "1 year",
        contactNumber: "0420719902",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        skills: "fruit picker",
        images: "employee.jpg"
    },

    {
        email: "Bryan-HockingOne@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Bryan Hocking",
        workType: "Restaurant-Worker",
        jobTitle: "waiter",
        experience: "2 year",
        contactNumber: "0420719908",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        skills: "Capacino",
        images: "employee.jpg"
    },

    {
        email: "pradeepOne@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Pradeep patel",
        workType: "Farm-Worker",
        jobTitle: "Spervisor",
        experience: "1 year",
        contactNumber: "0420719906",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        skills: "supervising",
        images: "employee.jpg"
    },

    {
        email: "saraMangOne@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Sara Manging",
        workType: "Cleaners",
        jobTitle: "window cleaner",
        experience: "1 year",
        contactNumber: "0420719902",
        description: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.",
        skills: "fruit picker",
        images: "employee.jpg"
    },
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
