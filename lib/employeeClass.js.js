export default class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }

  getId = function () {
    return this.id;
  };
  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

//const createEmployee = new Employee();

//module.exports = Employee;
