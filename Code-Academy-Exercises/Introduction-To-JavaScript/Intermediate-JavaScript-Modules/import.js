import Airplane from './airplane';
functoin displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
    console.log('Fuel Capacity of' + element.name + ':' + element.fuelCapacity);
  });
}
displayFuelCapacity();
