const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');

class App {
  constructor() {
    this.employees = [];
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
  createHTML() {}
  startNewBattle() {
    if (this.player.agility > this.currentEnemy.agility) {
      this.isPlayerTurn = true;
    } else {
      this.isPlayerTurn = false;
    }
    console.table(this.player.getStats());

    console.log(this.currentEnemy.getDescription());

    this.battle();
  }

  battle() {
    if (this.isPlayerTurn) {
      inquirer
        .prompt({
          type: 'list',
          message: 'What would you like to do?',
          name: 'action',
          choices: ['Attack', 'Use potion'],
        })
        .then(({ action }) => {
          if (action === 'Use potion') {
            if (!this.player.getInventory()) {
              console.log("You don't have any potions!");
              return this.checkEndOfBattle();
            }

            inquirer
              .prompt({
                type: 'list',
                message: 'Which potion would you like to use?',
                name: 'action',
                choices: this.player
                  .getInventory()
                  .map((item, index) => `${index + 1}: ${item.name}`),
              })
              .then(({ action }) => {
                const potionDetails = action.split(': ');

                this.player.usePotion(potionDetails[0] - 1);
                console.log(`You used a ${potionDetails[1]} potion.`);
                this.checkEndOfBattle();
              });
          } else {
            const damage = this.player.getAttackValue();
            this.currentEnemy.reduceHealth(damage);

            console.log(`You attacked the ${this.currentEnemy.name}`);
            console.log(this.currentEnemy.getHealth());

            this.checkEndOfBattle();
          }
        });
    } else {
      const damage = this.currentEnemy.getAttackValue();
      this.player.reduceHealth(damage);

      console.log(`You were attacked by the ${this.currentEnemy.name}`);
      console.log(this.player.getHealth());

      this.checkEndOfBattle();
    }
  }

  checkEndOfBattle() {
    if (this.player.isAlive() && this.currentEnemy.isAlive()) {
      this.isPlayerTurn = !this.isPlayerTurn;
      this.battle();
    } else if (this.player.isAlive() && !this.currentEnemy.isAlive()) {
      console.log(`You've defeated the ${this.currentEnemy.name}`);

      this.player.addPotion(this.currentEnemy.potion);
      console.log(
        `${this.player.name} found a ${this.currentEnemy.potion.name} potion`
      );

      this.roundNumber++;

      if (this.roundNumber < this.enemies.length) {
        this.currentEnemy = this.enemies[this.roundNumber];
        this.startNewBattle();
      } else {
        console.log('You win!');
      }
    } else {
      console.log("You've been defeated!");
    }
  }
}

module.exports = Game;
