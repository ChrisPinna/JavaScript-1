const Thermostat = require('../lib/thermostat');

describe('Thermostat', () => {
  it('returns the current temperature', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20)
  });
  
  it('increases the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21)
  });
  
  it('decreases the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19)
  });
  
  it('turns on powersaving mode', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();}
    expect(thermostat.getTemperature()).toBe(25)
  });

  it('turns off powersaving mode', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(true);
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    thermostat.setPowerSavingMode(false);
    thermostat.up()
    expect(thermostat.getTemperature()).toBe(26)
  });

  it('resets the temperature', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i++) {
      thermostat.up();
    }
    thermostat.reset()
    expect(thermostat.getTemperature()).toBe(20)
  });
});