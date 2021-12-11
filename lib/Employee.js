class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    setId() {
        return this.id
    }

    getEmail() {
        return this.email
    }
}

module.exports = Employee;

