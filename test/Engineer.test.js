const Engineer = require('../lib/Engineer');


//jest.mock('../lib/Potion.js');

test('creates an engineer object', () => {
  const engineer = new Engineer('Dawson','1920','dawson.tilley@gmail.com','dawsontilley');

  expect(engineer.name).toBe('Dawson');
  expect(engineer.id).toBe('1920');
  expect(engineer.email).toBe('dawson.tilley@gmail.com');
  expect(engineer.github).toBe('dawsontilley');
 
});
