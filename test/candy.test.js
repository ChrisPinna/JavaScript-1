const Candy = require('../lib/candy')

describe('Candy class', () => {
  test('should be able to return name of the candy', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toBe('Mars')
  });

  test('should be able to return price of the candy', () => {
    const candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toBe(4.99)
  });
});