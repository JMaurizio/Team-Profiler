const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const newManager = function(employee) {
    return`
    <div class="col-3 card m-4">
        <div class="card-header bg-success">
            <h3>${employee.name}</h3>
            <h4><i class="bi bi-building"></i> Manager</h4>
        </div>

        <div class="card-body">
            <p>ID:${employee.id}</p>
            <p>Email:${employee.email}</p>
            <p>Office Number:${employee.officeNumber}</p>
        </div>
    </div>`
};

const newEngineer = function(employee) {
    return`
    <div class="col-3 card m-4">
        <div class="card-header bg-success">
            <h3>${employee.name}</h3>
            <h4><i class="bi bi-pc-display-horizontal"></i> Engineer</h4>
        </div>

        <div class="card-body">
            <p>ID:${employee.id}</p>
            <p>Email:${employee.email}</p>
            <p>GitHub Username:${employee.githubUsername}</p>
        </div>
    </div>`
};

const newIntern = function(employee) {
    return`
    <div class="col-3 card m-4">
        <div class="card-header bg-success">
            <h3>${employee.name}</h3>
            <h4><i class="bi bi-mortarboard"></i> Intern</h4>
        </div>

        <div class="card-body">
            <p>ID:${employee.id}</p>
            <p>Email:${employee.email}</p>
            <p>School:${employee.school}</p>
        </div>
    </div>`
};

createCards = (data) => {
    employeeArray = [];
    
    for (i = 0; i < data.length; i++) {
        const employeeCard = data[i];
        const employeeRole = employeeCard.getRole()
        if(employeeRole === 'Manager') {
            const managerCard = newManager(employeeCard);
            employeeArray.push(managerCard);
            console.log("manager card created")
        }
        if(employeeRole === 'Engineer') {
            const engineerCard = newEngineer(employeeCard);
            employeeArray.push(engineerCard);
            console.log("engineer card created")
        }
        if(employeeRole === 'Intern') {
            const internCard = newIntern(employeeCard);
            employeeArray.push(internCard);
            console.log("intern card created")
        }
    }
    const cards = employeeArray.join("");
    const create = generatePage(cards);
    return create;
};

const generatePage = function(cards) {
    console.log(cards)
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiler</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>
    <body>
        <header>
            <h1 class="text-center w-100 bg-success p-4">Team Profiles</h1>
        </header>
        
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    ${cards}
                </div>
            </div>
        </main>
    </body>
    </html>`
    
};

module.exports = ("./src/generateHTML");