const Thermostat = require("./lib/thermostat");

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const thermostat = new Thermostat;

const changeTemperature = () => {
  rl.question('should we turn the thermostat up or down?', (answer) => {
    if (answer === "up") {
      thermostat.up();
      console.log(thermostat.getTemperature());
    } else if (answer === 'down') {
      thermostat.down();
      console.log(thermostat.getTemperature());
    } else if (answer === 'turn psm on') {
      thermostat.setPowerSavingMode(true);
      console.log(thermostat.getTemperature());
    } else if (answer === 'turn psm off') {
      thermostat.setPowerSavingMode(false);
      console.log(thermostat.getTemperature());
    };
    changeTemperature();
  });
};

changeTemperature();
