const Manager = require('../lib/Manager');

//Test init
test('Creates an manager object', () => {
  const manager = new Manager('Boss Man', 'SrsBsns@gmail.com', '2', '3');

  expect(manager.name).toBe('Boss Man');
  expect(manager.email).toBe('SrsBsns@gmail.com');
  expect(manager.id).toBe('3');
  expect(manager.officeNumber).toBe('2');
});
//Test getters
test('Gets name value', () => {
  const manager = new Manager('Boss Man', 'SrsBsns@gmail.com', '2', '3');

  expect(manager.getName()).toBe('Boss Man');
});

test('Gets email value', () => {
  const manager = new Manager('Boss Man', 'SrsBsns@gmail.com', '2', '3');

  expect(manager.getEmail()).toBe('SrsBsns@gmail.com');
});

test('Gets id value', () => {
  const manager = new Manager('Boss Man', 'SrsBsns@gmail.com', '2', '3');

  expect(manager.getID()).toBe('3');
});

test('Gets office number value', () => {
  const manager = new Manager('Boss Man', 'SrsBsns@gmail.com', '2', '3');

  expect(manager.getOfficeNum()).toBe('2');
});

test('Gets role value', () => {
  const manager = new Manager('Boss Man', 'SrsBsns@gmail.com', '2', '3');

  expect(manager.getRole()).toBe('Manager');
});
