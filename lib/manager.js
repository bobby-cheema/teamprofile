import Employee from "./employeeClass.js";
export class Manager extends Employee {
  constructor(name, id, email, number) {
    super(name, id, email);
    this.number = number;
  }
  getRole() {
    return "Manager";
  }
  getOffice() {
    return this.number;
  }
}
