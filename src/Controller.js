var thermostat = new Thermostat();
displayUpdate();

$('#increase').on('click', function() {
  thermostat.increase();
  displayUpdate();
});

$('#decrease').on('click', function() {
  thermostat.decrease();
  displayUpdate();
});

$('#reset').on('click', function() {
  thermostat.reset();
  displayUpdate();
});

$('#togglePSM').on('click', function() {
  thermostat.togglePowerSaving();
  psmUpdate();
  displayUpdate();
});

$('.weather-btn').on('click', function() {
  if ($(".input-weather").val() != "" ) { $(".city-display").show() };
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + $(".input-weather").val() + "&APPID=5b09bcf52074c70d63d02d2f8e3f9557", function(json) {
   $(".city").text(json.name);
   $(".temperature").text((json.main.temp - 273.15).toFixed(0));
   $(".temp_min").text((json.main.temp_min - 273.15).toFixed(0));
   $(".temp_max").text((json.main.temp_max - 273.15).toFixed(0));
 });
});

function psmUpdate() {
  if (thermostat.maxTemperature === 32) {
    $('#psm-status').text('PSM: OFF').css('color', '#DC143C');
  } else {
    $('#psm-status').text('PSM: ON').css('color', '#00008B');
  };
};

function displayUpdate() {
  $('#temp').text(thermostat.temperature);
  $('#usage').text(thermostat.energyUsage());
  colorUpdate();
  var temp = (100 - Math.floor(100 * (thermostat.temperature - thermostat.minTemperature) / (32 - thermostat.minTemperature))) + '%';
  $('#thermometer').animate({height: temp});
};

function colorUpdate() {
  if (thermostat.temperature < 13) {
    $('#thermo-box, #thermo-bottom').css('backgroundColor', '#ffcc66');
  } else if (thermostat.temperature < 18) {
    $('#thermo-box, #thermo-bottom').css('backgroundColor', '#ffcc66');
    $('#usage').css('color', '#008000');
  } else if (thermostat.temperature < 25) {
    $('#thermo-box, #thermo-bottom').css('backgroundColor', '#ff9933');
    $('#usage').css('color', '#00008B');
  } else if (thermostat.temperature < 30) {
    $('#thermo-box, #thermo-bottom').css('backgroundColor', '#ff3300');
    $('#usage').css('color', '#DC143C');
  } else {
    $('#thermo-box, #thermo-bottom').css('backgroundColor', '#ff0000');
  };
};
