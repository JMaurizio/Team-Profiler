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
            <h4>Manager ${roleIcon}</h4>
        </div>

        <div class="card-body">
            <p>ID:${employee.id}</p>
            <p>Email:${employee.email}</p>
            <p>Office Number:${employee.officeNumber}</p>
        </div>
    </div>`
};

roleIcon = function(employee) {
    
}