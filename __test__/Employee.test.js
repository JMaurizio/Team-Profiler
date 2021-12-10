const { expect } = require("@jest/globals");
const { test } = require("jest-circus");
const { exp } = require("prelude-ls");
const Employee = require("../lib/Employee");

test("Can create new employee object", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Set employee name", () => {
    const name = "Name";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("Set employee id", () => {
    const employeeId = 0;
    const employee = new Employee(employeeId);
    expect(employee.setId()).toBe(employeeId);
});

test("Set employee email", () => {
    const email = "test@test.com";
    const employee = new Employee(email);
    expect(employee.getEmail()).toBe(email);
})