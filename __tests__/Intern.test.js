const Intern = require('../lib/Intern');

//Test init
test('Creates an intern object', () => {
  const intern = new Intern(
    'Coffee Boy',
    'JavaBean@gmail.com',
    'Learn2Code',
    '4'
  );

  expect(intern.name).toBe('Coffee Boy');
  expect(intern.email).toBe('JavaBean@gmail.com');
  expect(intern.id).toBe('4');
  expect(intern.school).toBe('Learn2Code');
});
//Test getters
test('Gets name value', () => {
  const intern = new Intern(
    'Coffee Boy',
    'JavaBean@gmail.com',
    'Learn2Code',
    '4'
  );

  expect(intern.getName()).toBe('Coffee Boy');
});

test('Gets email value', () => {
  const intern = new Intern(
    'Coffee Boy',
    'JavaBean@gmail.com',
    'Learn2Code',
    '4'
  );

  expect(intern.getEmail()).toBe('JavaBean@gmail.com');
});

test('Gets id value', () => {
  const intern = new Intern(
    'Coffee Boy',
    'JavaBean@gmail.com',
    'Learn2Code',
    '4'
  );

  expect(intern.getID()).toBe('4');
});

test('Gets school value', () => {
  const intern = new Intern(
    'Coffee Boy',
    'JavaBean@gmail.com',
    'Learn2Code',
    '4'
  );

  expect(intern.getSchool()).toBe('Learn2Code');
});

test('Gets role value', () => {
  const intern = new Intern(
    'Coffee Boy',
    'JavaBean@gmail.com',
    'Learn2Code',
    '4'
  );

  expect(intern.getRole()).toBe('Intern');
});
