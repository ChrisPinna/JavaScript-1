const User = require('../lib/user');

describe ('User', () => {
  test ('user can return their name', () => {
    const phil = new User('Phil');
    expect(phil.getName()).toBe('Phil')
  });
  
  test ('user can return a pesonalised introduction', () => {
    const chris = new User('Chris');
    expect(chris.getIntroduction()).toBe('Hi, my name is Chris')
  });
}); 