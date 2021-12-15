const generatePage = function() {
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

const newManager = function(employee) {
    return`
    <div class="col-3 card m-4">
        <div class="card-header bg-success">
            <h3>${employee.name}</h3>
            <h4>${roleIcon} Manager</h4>
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
            <h4>${roleIcon} Engineer</h4>
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
            <h4>${roleIcon} Intern</h4>
        </div>

        <div class="card-body">
            <p>ID:${employee.id}</p>
            <p>Email:${employee.email}</p>
            <p>School:${employee.school}</p>
        </div>
    </div>`
};

roleIcon = function(role) {
    switch (role) {
        case "Manager":
            roleIcon = `<i class="bi bi-building"></i>`;
        case "Engineer":
            roleIcon = `<i class="bi bi-pc-display-horizontal"></i>`;
        case "Intern":
            roleIcon = `<i class="bi bi-mortarboard"></i>`;        
    }
}

createCards = (data) => {
    employeeArray = [];

    for (i = 0; i < data.length; i++) {
        const employeeCard = data[i];
        const role = employee.getRole()
        
        if(role == "Manager") {
            const managerCard = newManager(employeeCard);
            employeeArray.push(managerCard);
        }
        if(role == "Engineer") {
            const engineerCard = newEngineer(employeeCard);
            employeeArray.push(engineerCard);
        }
        if(role == "Intern") {
            const internCard = newIntern(employeeCard);
            employeeArray.push(internCard);
        }
    }
    const cards = employeeArray.join("");
    const create = generatePage(cards);
    return create;
};

module.exports = ("./src/generateHTML");