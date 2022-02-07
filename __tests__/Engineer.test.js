import Employee from "../lib/employeeClass.js";
import { Engineer } from "../lib/engineer.js";

test("set the github account", () => {
  const github = "bobby-github";
  const person = new Engineer("bobby", 1, "bobby@bobby.com", github);
  expect(person.github).toBe(github);
});

test('method getRole()"', () => {
  const myrole = "Engineer";
  const person = new Engineer("bobby", 1, "bobby@bobby.com", "bobby-github");
  expect(person.getRole()).toBe(myrole);
});

test("method  getGit()", () => {
  const mygithub = "bobby-github";
  const person = new Engineer("bobby", 1, "bobby@bobby.com", "bobby-github");
  expect(person.getGithub()).toBe(mygithub);
});
