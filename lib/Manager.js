const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name = '', email = '', officeNumber, id) {
    super(name, email, id);
    this.officeNumber = officeNumber;
  }
  getOfficeNum() {
    return this.officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}
module.exports = Manager;
