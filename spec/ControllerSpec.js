// 'use strict';

describe("Webpage", function() {
    var thermostat;

    beforeEach(function() {
       thermostat = new Thermostat();
    });

  it("clicks a button", function() {
    console.log(thermostat.temperature);
    $('#increase').click();
    console.log(thermostat.temperature);
    expect(thermostat.temperature).toEqual(21);
  });
});
