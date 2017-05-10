function Thermostat() {
  this.temperature = 20;
  this.maxTemperature = 25;
};

Thermostat.prototype.increase = function() {
  this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  this._temperatureCheck();
  this.temperature -= 1;
};

Thermostat.prototype.togglePowerSaving = function() {
 this.maxTemperature === 25 ? this.maxTemperature = 32 : this.maxTemperature = 25;
};

// Private

Thermostat.prototype._temperatureCheck = function() {
  if (this.temperature <= 10) {
    throw "Temperature already at minimum";
  };
};
