describe("Thermostat", function() {
  it("has a default temperature", function() {
    var thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

  it("increases the temperature by 1", function() {
    var thermostat = new Thermostat();
    thermostat.increase();
    expect(thermostat.temperature).toEqual(21);
  });
});
