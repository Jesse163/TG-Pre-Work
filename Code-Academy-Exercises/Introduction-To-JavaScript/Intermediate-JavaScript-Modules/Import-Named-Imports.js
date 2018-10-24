import {avilableAirplanes,flightRequirements, meetsStaffRequirements}from'./airplane';
function displayFuelCapacity() {
  avilableAirplanes.forEaach(function(element)
}
console.log('Fuel Capacity of'+element['name'+':'+element['fuelCapacity']);
    });
  }
displayFuelCapacity();
function displayStaffStatus() {
  avilableAirplanes.forEach(function(element)
}
console.log(element['name'] + 'meets staff requirements:' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']) );
  });
}
displayStaffStatus();



import {avilableAirplanes,flightRequirements, meetsStaffRequirements}from'./airplane';
function displayFuelCapacity() {
  avilableAirplanes.forEaach(function(element)
}
console.log('Fuel Capacity of'+element['name'+':'+element['fuelCapacity']);
    });
  }
displayFuelCapacity();
function displayStaffStatus() {
  avilableAirplanes.forEach(function(element)
}
console.log(element['name'] + 'meets staff requirements:' + meetsStaffRequirements(element['availableStaff'], flightRequirements['requiredStaff']) );
  });
}
displayStaffStatus();
function displaySpeedRangeStatus() {
availableAirplanes.ForEach(function(element)
}
console.log(element.name + 'meets speed range requirements' + meetsSpeedRangeRequirements(element.maxSpeed,element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}
displaySpeedRangeStatus();
