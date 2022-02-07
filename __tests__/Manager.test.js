import { Manager } from "../lib/manager";

test("office number ", () => {
  const myroom = 101;
  const person = new Manager("bobby", 1, "bobby@bobby.com", myroom);
  expect(person.number).toBe(myroom);
});

test('method getRole()"', () => {
  const myrole = "Manager";
  const person = new Manager("bobby", 1, "bobby@bobby.com", 101);
  expect(person.getRole()).toBe(myrole);
});

test("method  getOffice()", () => {
  const number = 100;
  const person = new Manager("bobby", 1, "bobby@bobby.com", 100);
  expect(person.getOffice()).toBe(number);
});
