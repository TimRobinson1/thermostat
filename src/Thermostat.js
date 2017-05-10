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

// Private

Thermostat.prototype._temperatureCheck = function() {
  if (this.temperature <= 10) {
    throw "Temperature already at minimum";
  };
};
