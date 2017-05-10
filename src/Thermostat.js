function Thermostat() {
  this.defaultTemperature = 20;
  this.temperature = this.defaultTemperature;
  this.maxTemperature = 25;
  this.minTemperature = 10;
};

Thermostat.prototype.increase = function() {
  this._maxtemperatureCheck();
  this.temperature += 1;
};

Thermostat.prototype.decrease = function() {
  this._mintemperatureCheck();
  this.temperature -= 1;
};

Thermostat.prototype.togglePowerSaving = function() {
 this.temperature >= 26 ? this.temperature = 25 : this.temperature = this.temperature;
 this.maxTemperature === 25 ? this.maxTemperature = 32 : this.maxTemperature = 25;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.defaultTemperature;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature < 18) return 'low-usage';
  else if (this.temperature < 25) return 'medium-usage';
  else return 'high-usage';
};

// Private

Thermostat.prototype._mintemperatureCheck = function() {
  if (this.temperature <= this.minTemperature) {
    throw "Temperature already at minimum";
  }
};

Thermostat.prototype._maxtemperatureCheck = function() {
  if (this.temperature >= this.maxTemperature) {
    throw "Temperature at maximum";
  }
};
