const Employee = require("../lib/Employee");

test("Can create new employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Set employee name", () => {
    const name = "name"
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("Set employee id", () => {
    const id = 0
    const employee = new Employee("name",id);
    expect(employee.setId()).toBe(id);
});

test("Set employee email", () => {
    const email = "test@test.com"
    const employee = new Employee("name", 0, email);
    expect(employee.getEmail()).toBe(email);
})