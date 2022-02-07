import { Intern } from "../lib/intern";

test("create new intern with school ", () => {
  const myschool = "bobby";
  const person = new Intern("bobby", 1, "bobby@bobby.com", myschool);
  expect(person.school).toBe(myschool);
});

test("getrole method", () => {
  const myrole = "Intern";
  const person = new Intern("bobby", 1, "bobby@bobby.com", "primary school");
  expect(person.getRole()).toBe(myrole);
});

test("method getSchool()", () => {
  const myschool = "school";
  const person = new Intern("bobby", 1, "bobby@bobby.com", "school");
  expect(person.getSchool()).toBe(myschool);
});
