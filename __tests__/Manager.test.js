const Manager = require('../lib/Manager');


//jest.mock('../lib/Potion.js');

test('creates an manager object', () => {
  const manager = new Manager('Dawson','1920','dawson.tilley@gmail.com','TOR');

  expect(manager.name).toBe('Dawson');
  expect(manager.id).toBe('1920');
  expect(manager.email).toBe('dawson.tilley@gmail.com');
  expect(manager.officeNumber).toBe('TOR');
 
});
