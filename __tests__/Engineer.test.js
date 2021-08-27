const Engineer = require('../lib/Engineer');

//Test init
test('Creates an engineer object', () => {
  const engineer = new Engineer(
    'Smart Guy',
    'Smartie@gmail.com',
    'SmartCoder19',
    '2'
  );

  expect(engineer.name).toBe('Smart Guy');
  expect(engineer.email).toBe('Smartie@gmail.com');
  expect(engineer.id).toBe('2');
  expect(engineer.github).toBe('SmartCoder19');
});
//Test getters
test('Gets name value', () => {
  const engineer = new Engineer(
    'Smart Guy',
    'Smartie@gmail.com',
    'SmartCoder19',
    '2'
  );

  expect(engineer.getName()).toBe('Smart Guy');
});

test('Gets email value', () => {
  const engineer = new Engineer(
    'Smart Guy',
    'Smartie@gmail.com',
    'SmartCoder19',
    '2'
  );

  expect(engineer.getEmail()).toBe('Smartie@gmail.com');
});

test('Gets id value', () => {
  const engineer = new Engineer(
    'Smart Guy',
    'Smartie@gmail.com',
    'SmartCoder19',
    '2'
  );

  expect(engineer.getID()).toBe('2');
});

test('Gets github value', () => {
  const engineer = new Engineer(
    'Smart Guy',
    'Smartie@gmail.com',
    'SmartCoder19',
    '2'
  );

  expect(engineer.getGithub()).toBe('SmartCoder19');
});

test('Gets role value', () => {
  const engineer = new Engineer(
    'Smart Guy',
    'Smartie@gmail.com',
    'SmartCoder19',
    '2'
  );

  expect(engineer.getRole()).toBe('Engineer');
});
