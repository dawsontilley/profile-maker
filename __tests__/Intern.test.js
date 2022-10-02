const Intern = require('../lib/Intern');


//jest.mock('../lib/Potion.js');

test('creates an Intern object', () => {
  const intern = new Intern('Dawson','1920','dawson.tilley@gmail.com','Queens');

  expect(intern.name).toBe('Dawson');
  expect(intern.id).toBe('1920');
  expect(intern.email).toBe('dawson.tilley@gmail.com');
  expect(intern.school).toBe('Queens');
 
});
