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
        description: "Hello my name is Pradeep Marasini. I am professional Bar tender.I have 3 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills..",
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
        description: "Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills.",
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
        description: "Hello my name is Sara Mang. I am professional Farmer.I have 5 years of experience working in different farms. I can continuoulsy improve farm yields through implementation of process laborer and crop improvements.Source outside vender for crop protection application and equipment repair",
        skills: "fruit picker",
        images: "employee.jpg"
    },

    {
        email: "Bryan-HockingTwo@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Bryan Hocking",
        workType: "Restaurant-Worker",
        jobTitle: "waiter",
        experience: "2 year",
        contactNumber: "0420719908",
        description: "Highly reliable and dedicated Restaurant Worker with a strong customer service record and a stellar work ethic. Flexible schedulling availability to include evenings, weekends and special events as required. Able to function well as an independent worker with little to no supervision or as a member of a restaurant worker team..",
        skills: "Capacino",
        images: "employee.jpg"
    },

    {
        email: "pradeepTwo@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Pradeep patel",
        workType: "Farm-Worker",
        jobTitle: "Spervisor",
        experience: "1 year",
        contactNumber: "0420719906",
        description: "I am professional Farmer.I have 5 years of experience working in different farms. I can continuoulsy improve farm yields through implementation of process laborer and crop improvements.Source outside vender for crop protection application and equipment repair.",
        skills: "supervising",
        images: "employee.jpg"
    },

    {
        email: "saraMangTwo@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Sara Manging",
        workType: "Cleaners",
        jobTitle: "window cleaner",
        experience: "1 year",
        contactNumber: "0420719902",
        description: "I am professional Farmer.I have 5 years of experience working in different farms. I can continuoulsy improve farm yields through implementation of process laborer and crop improvements.Source outside vender for crop protection application and equipment repair.",
        skills: "fruit picker",
        images: "employee.jpg"
    },

    {
        email: "Bryan-HockingTwo@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Bryan Hocking",
        workType: "Restaurant-Worker",
        jobTitle: "Coffe Maker",
        experience: "3 year",
        contactNumber: "0420719902",
        description: "Hello my name is Pradeep Marasini. I am professional Bar tender.I have 3 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills..",
        skills: "Capacino",
        images: "5f8626db3fc13c0743d43e99.jpg" //must match the id of employee and file extension .png
    },

    {
        email: "marasinipradeepTwo@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Pradeep Marasini",
        workType: "Farm-Worker",
        jobTitle: "Fruit Picker",
        experience: "3 year",
        contactNumber: "0420719901",
        description: "Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills. Hello my name is Pradeep Marasini. I am professional chef.I have 5 years of experience working in different restaurant. I can cook Italian Pasta, pizza and prepare sauce. I have grate customer skills.",
        skills: "fruit picker",
        images: "employee.jpg"
    },

    {
        email: "saraMangTwo@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Sara Mang",
        workType: "Cleaners",
        jobTitle: "commercial cleaner",
        experience: "1 year",
        contactNumber: "0420719902",
        description: "Hello my name is Sara Mang. I am professional Farmer.I have 5 years of experience working in different farms. I can continuoulsy improve farm yields through implementation of process laborer and crop improvements.Source outside vender for crop protection application and equipment repair",
        skills: "fruit picker",
        images: "employee.jpg"
    },

    {
        email: "Bryan-HockingThree@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Bryan Hocking",
        workType: "Restaurant-Worker",
        jobTitle: "waiter",
        experience: "2 year",
        contactNumber: "0420719908",
        description: "Highly reliable and dedicated Restaurant Worker with a strong customer service record and a stellar work ethic. Flexible schedulling availability to include evenings, weekends and special events as required. Able to function well as an independent worker with little to no supervision or as a member of a restaurant worker team..",
        skills: "Capacino",
        images: "employee.jpg"
    },

    {
        email: "pradeepThree@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Pradeep patel",
        workType: "Farm-Worker",
        jobTitle: "Spervisor",
        experience: "1 year",
        contactNumber: "0420719906",
        description: "I am professional Farmer.I have 5 years of experience working in different farms. I can continuoulsy improve farm yields through implementation of process laborer and crop improvements.Source outside vender for crop protection application and equipment repair.",
        skills: "supervising",
        images: "employee.jpg"
    },

    {
        email: "saraMangThree@gmail.com",
        password: "$2a$10$4bnQZBeCS1QNFTM.v5CV2.V7cy8.lR6zshqsvYzhIXmH.kfi9TTAu",
        isOnline: true,
        name: "Sara Manging",
        workType: "Cleaners",
        jobTitle: "window cleaner",
        experience: "1 year",
        contactNumber: "0420719902",
        description: "I am professional Farmer.I have 5 years of experience working in different farms. I can continuoulsy improve farm yields through implementation of process laborer and crop improvements.Source outside vender for crop protection application and equipment repair.",
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
