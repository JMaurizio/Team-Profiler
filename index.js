const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const fs = require("fs");
const inquirer = require("inquirer");
const { create } = require("domain");

const team = [];

const addEmployee = () => {
    return inquirer.prompt([
        {
            name: "role",
            type: "list",
            message:"What is the employee's role?",
            choices:[{name: "Manager", value: 0},{name: "Engineer", value: 1},{name: "Intern", value: 2}]
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
        },
        {
            name: "officeNumber",
            type: "input",
            message: "What is the Manager's office number?",
            when: (response) => response.role === 0,
        },
        {
            name: "github",
            type: "input",
            message: "What is the Engineers GitHub username?",
            when: (response) => response.role === 1
        },
        {
            name: "school",
            type: "input",
            message: "What school is the Intern attending?",
            when: (response) => response.role === 2
        }
    ])
    .then(responses => {
        if(responses.role === 0) {
            const manager = new Manager (responses.name, responses.id, responses.email, responses.officeNumber, responses.role)
            team.push(manager);
            addAnotherEmployee()
        }
        if(responses.role === 1) {
            const engineer = new Engineer (responses.name, responses.id, responses.email, responses.github)
            team.push(engineer);
            addAnotherEmployee()
        }
        if(responses.role === 2) {
            const intern = new Intern (responses.name, responses.id, responses.email, responses.school, responses.role)
            team.push(intern);
            addAnotherEmployee()
        }
    })
};    

const addAnotherEmployee = () => {
    return inquirer.prompt([
        {
           name: "add",
           type: "list",
            message: "Would you like to add another employee?",
           choices: [{name: "Yes", value: 0},{name: "No", value: 1}]  
        }
    ])
    .then((response) =>{
        if(response.add === 0) {
            addEmployee()
        }
        else {
            return writeFile(createCards(team))
        }   
    })
};

const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if(err) {
            console.log(err);
            return
        }
        console.log("Team profile generated!")
    })
};

addEmployee()