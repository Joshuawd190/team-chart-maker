const Employee = require('../lib/Employee');

//Test init
test('Creates an employee object', () => {
  const employee = new Employee('Joe Dirt', 'Dirty@gmail.com', '1');

  expect(employee.name).toBe('Joe Dirt');
  expect(employee.email).toBe('Dirty@gmail.com');
  expect(employee.id).toBe('1');
});
//Test getters
test('Gets name value', () => {
  const employee = new Employee('Joe Dirt', 'Dirty@gmail.com', '1');

  expect(employee.getName()).toBe('Joe Dirt');
});

test('Gets email value', () => {
  const employee = new Employee('Joe Dirt', 'Dirty@gmail.com', '1');

  expect(employee.getEmail()).toBe('Dirty@gmail.com');
});

test('Gets id value', () => {
  const employee = new Employee('Joe Dirt', 'Dirty@gmail.com', '1');

  expect(employee.getID()).toBe('1');
});

test('Gets role value', () => {
  const employee = new Employee('Joe Dirt', 'Dirty@gmail.com', '1');

  expect(employee.getRole()).toBe('Employee');
});
