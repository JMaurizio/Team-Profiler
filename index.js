const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");

const team = [];

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            name:"role",
            message:"What is the employee's role?",
            choices:["Manager","Engineer","Intern"]
        },
        {
            type: "input",
            name: "name",
            message:"Please enter employee name.",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the employee's ID."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the employee's Email."
        }
    ])
}