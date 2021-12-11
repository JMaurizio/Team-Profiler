const Manager = require("../lib/Manager")

test("Get manager office number", () => {
    const officeNumber = 0
    const manager = new Manager("name", 0, "test@test.com", officeNumber);
    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test("Get role of manager", () => {
    const role = "Manager"
    const manager = new Manager("name", 0, "test@test.com", 0);
    expect(manager.getRole()).toBe(role); 
})