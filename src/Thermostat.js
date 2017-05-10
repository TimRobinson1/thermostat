function Thermostat() {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
  this.maxTemperature = 25;
  this.minTemperature = 10;
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

Thermostat.prototype.reset = function() {
  this.temperature = this.defaultTemperature;
};

Thermostat.prototype.energyUsage = function() {
  if(this.temperature < 18) return 'low-usage';
};

// Private

Thermostat.prototype._temperatureCheck = function() {
  if (this.temperature <= this.minTemperature) {
    throw "Temperature already at minimum";
  };
};
