const Intern = require("../lib/Intern")

test("Get intern school", () => {
    const school = "school"
    const intern = new Intern("name", 0, "test@test.com", school);
    expect(intern.getSchool()).toBe(school);
})

test("Get role of intern", () => {
    const role = "Intern"
    const intern = new Intern("name", 0, "test@test.com", "school");
    expect(intern.getRole()).toBe(role)
})