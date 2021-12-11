const Engineer = require("../lib/Engineer")

test("Get engineer github", () => {
    const githubUsername = "username"
    const engineer = new Engineer("name", 0, "test@test.com", githubUsername);
    expect(engineer.getGithub()).toBe(githubUsername);
})

test("Get role of engineer", () => {
    const role = "Engineer"
    const engineer = new Engineer("name", 0, "test@test.com", "username");
    expect(engineer.getRole()).toBe(role)
})