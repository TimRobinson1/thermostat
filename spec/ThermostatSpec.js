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
});
