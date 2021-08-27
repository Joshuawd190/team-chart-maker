const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const templateData = require('../src/template');
const generateFiles = require('../src/generateFiles');

class App {
  constructor() {
    this.employees = [];
  }

  getEmployees() {
    return this.employees;
  }

  initializeApp() {
    console.log(`
================================
Welcome to the Team Chart Maker
================================
`);

    this.runPrompt();
  }
  runPrompt() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: `What is your team manager's name?`,
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter the employee ID',
        },
        {
          type: 'input',
          name: 'email',
          message: `Enter the employee's email`,
        },
        {
          type: 'input',
          name: 'officeNumber',
          message: 'Enter the employee office number',
        },
      ])
      .then(({ name, id, email, officeNumber }) => {
        this.employees.push(new Manager(name, email, officeNumber, id));

        this.nextPrompt();
      });
  }
  nextPrompt() {
    inquirer
      .prompt({
        type: 'list',
        name: 'runNext',
        choices: ['Engineer', 'Intern', 'Done'],
        message: 'Add another employee?',
      })
      .then((data) => {
        switch (data.runNext) {
          case 'Engineer':
            return this.addEngineer();
          case 'Intern':
            return this.addIntern();
          case 'Done':
            return this.createHTML();
          default:
            return console.log('There was some kind of error');
        }
      });
  }
  addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: `What is your Engineer's name?`,
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter the employee ID',
        },
        {
          type: 'input',
          name: 'email',
          message: `Enter the employee's email`,
        },
        {
          type: 'input',
          name: 'github',
          message: `Enter the employee's GitHub username`,
        },
      ])
      .then(({ name, id, email, github }) => {
        this.employees.push(new Engineer(name, email, github, id));

        this.nextPrompt();
      });
  }
  addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: `What is your Intern's name?`,
        },
        {
          type: 'input',
          name: 'id',
          message: 'Enter the employee ID',
        },
        {
          type: 'input',
          name: 'email',
          message: `Enter the employee's email`,
        },
        {
          type: 'input',
          name: 'school',
          message: `Enter the employee's school name`,
        },
      ])
      .then(({ name, id, email, school }) => {
        this.employees.push(new Intern(name, email, school, id));

        this.nextPrompt();
      });
  }
  createHTML() {
    const htmlData = templateData(this.getEmployees());
    generateFiles(htmlData);
  }
}

module.exports = App;
