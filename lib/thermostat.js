

class Thermostat {
  constructor() {
    this.temp = 20;
    this.minTemp = 10;
    this.maxTemp = 32;
  }

  getTemperature() {
    return this.temp
  }

  up() {
    if (this.temp != this.maxTemp) {
    this.temp ++
  }}

  down() {
    if (this.temp != this.minTemp) {
    this.temp --
  }}

  setPowerSavingMode(status) {
    if (status === true) {
      this.maxTemp = 25
    } else {
      this.maxTemp = 32
    }
  }

  reset() {
    this.temp = 20;
  }
}

module.exports = Thermostat