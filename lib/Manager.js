const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name = '', email = '', officeNumber) {
    super(name, email);
    this.ID = super.createID();
    this.officeNumber = officeNumber;
  }
  getRole() {
    return 'Manager';
  }
}
module.exports = Manager;
