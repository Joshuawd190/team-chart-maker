class Employee {
  constructor(name = '', email = '') {
    this.name = name;
    this.ID = this.createID();
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.ID;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return 'Employee';
  }
}

module.exports = Employee;
