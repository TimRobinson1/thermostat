'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
     thermostat = new Thermostat();
  });

  it("has a default temperature", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases the temperature by 1", function() {
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });

  it("decreases the temperature by 1", function() {
    thermostat.decrease();
    expect(thermostat.temperature).toEqual(19);
  });

  it("cannot go below 10 degrees", function() {
    var i = 0;
    for (; i < 10; i++) {
      thermostat.decrease();
    };
    expect(function() {
      thermostat.decrease();
    }).toThrow("Temperature already at minimum");
  });

  it("sets the max temperature, with PSM on by default", function() {
    expect(thermostat.maxTemperature).toEqual(25);
  });

  it("sets the max temperature, with PSM off", function() {
    thermostat.togglePowerSaving();
    expect(thermostat.maxTemperature).toEqual(32);
  });

  it("can have temperature reset to 20 degrees", function() {
    thermostat.decrease();
    thermostat.reset();
    expect(thermostat.temperature).toEqual(20);
  });

  it("returns low-usage when asked, if the temp is under 18", function() {
    var i = 0;
    for (; i < 3; i++) {
      thermostat.decrease();
    };
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it("returns medium-usage when asked, if the temp is under 25", function() {
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });

  it("returns high-usage when asked, if the temp is 25 or higher", function() {
    var i = 0;
    for (; i < 5; i++) {
      thermostat.increase();
    };
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });
});
