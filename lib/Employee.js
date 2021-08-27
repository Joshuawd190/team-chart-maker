class Employee {
  constructor(name = '', email = '') {
    this.name = name;
    this.ID = this.createID();
    this.email = email;
  }
  createID() {
    return Math.floor(Math.random() * 100) + Date.now();
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
