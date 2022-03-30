const UserBase = require('../lib/userBase')
const User = require('../lib/user')

describe('UserBase', () => {

  test ('returns the number of users in the userbase', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userBase = new UserBase(users)
    expect(userBase.count()).toBe(3);
  });

  test ('returns the names of users in the userbase', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userBase = new UserBase(users)
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ]);
  });

  test ('returns introductions to users in the userbase', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];
    const userBase = new UserBase(users)
    expect(userBase.getIntroductions()).toEqual([
      'Hi, my name is Uma',
      'Hi, my name is Josh',
      'Hi, my name is Ollie'
    ]);
  });
});