const Employee = require('../lib/Employee');

//jest.mock('../lib/Potion.js');

test('creates an employee object', () => {
  const employee = new Employee('Dawson','1920','dawson.tilley@gmail.com');

  expect(employee.name).toBe('Dawson');
  expect(employee.id).toBe('1920');
  expect(employee.email).toBe('dawson.tilley@gmail.com');
 
});
