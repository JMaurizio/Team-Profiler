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
            name: "role",
            type: "list",
            message:"What is the employee's role?",
            choices:["Manager","Engineer","Intern"]
        },
        {
            name: "name",
            type: "input",
            message:"Please enter employee name.",
        },
        {
            name: "id",
            type: "input",
            message: "Please enter the employee's ID."
        },
        {
            name: "email",
            type: "input",
            message: "Please enter the employee's Email."
        }
    ])
    .then(role => {
        if(role == "Manager") {
            return inquirer.prompt([
                {
                    name: "officeNumber",
                    type: "input",
                    message: "What is the Manager's office number?"
                }
            ])
            .then(answers => {
                const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber)
                team.push(manager);
            })
        }
        if(role == "Engineer") {
            return inquirer.prompt([
                {
                    name: "github",
                    type: "input",
                    message: "What is the Engineers GitHub username?"
                }
            ])
            .then(answers => {
                const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github)
                team.push(engineer);
            })
        }
        if(role == "Intern") {
            return inquirer.prompt([
                {
                    name: "school",
                    type: "input",
                    message: "What school is the Intern attending?"
                }
            ])
            .then(answers => {
                const intern = new Intern (answers.name, answers.id, answers.email, answers.school)
                team.push(intern);
            })
        }
        return inquirer.prompt([
            {
               name: "add",
               type: "list",
               message: "Would you like to add another employee?",
               choices: ["Yes","No"]  
            }
        ])
    })
    .then(answers =>{
        if(answers == "Yes") {
            addEmployee()
        }
        else {
            return generateHTML(team)
        }   
    })
}

addEmployee()