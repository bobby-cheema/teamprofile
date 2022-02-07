// const Employee = require("../lib/employeeClass.js");
import Employee from "../lib/employeeClass.js";
test("Create a new Employee", () => {
  const person = new Employee();
  expect(typeof person).toBe("object");
});

test("name of the person", () => {
  const name = "Bobby";
  const person = new Employee(name);

  expect(person.name).toBe(name);
});

test("id of the person", () => {
  const myid = 1;
  const person = new Employee("bobby", myid);
  expect(person.id).toBe(myid);
});

test("Email of the employee", () => {
  const myemail = "bobby@bobby.com";
  const person = new Employee("bobby", 1, myemail);
  expect(person.email).toBe(myemail);
});

test("method getName()", () => {
  const myname = "bobby";
  const person = new Employee(myname);
  expect(person.getName()).toBe(myname);
});

test("method getId()", () => {
  const myid = 1;
  const person = new Employee("bobby", myid);
  expect(person.getId()).toBe(myid);
});

test("method getEmail()", () => {
  const myemail = "bobby@bobby.com";
  const person = new Employee("bobby", 1, myemail);
  expect(person.getEmail()).toBe(myemail);
});

test("method getRole() ", () => {
  const myrole = "Employee";
  const person = new Employee("bobby", 1, "bobby@bobby.com", myrole);
  expect(person.getRole()).toBe(myrole);
});
