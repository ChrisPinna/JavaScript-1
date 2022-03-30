const ShoppingBasket = require('../lib/shoppingBasket');

describe('ShoppingBasket class', () => {
  test('should be able to return a total price', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toBe(0);
  });
  
  test('should be able to return add and item to the shopping basket', () => {
    const basket = new ShoppingBasket();
    const candyDouble = { getPrice: () => 4.99 }; // this is how you create a double
    basket.addItem(candyDouble);
    expect(basket.getTotalPrice()).toBe(4.99);
  });

});