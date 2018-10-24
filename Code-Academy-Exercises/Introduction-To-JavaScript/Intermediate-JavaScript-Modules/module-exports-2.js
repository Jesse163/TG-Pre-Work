2-AIRPLANE.JS

const Airplane={};
module.exports={
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

2-MISSIONCONTROL
const Airplane=require('./2-airplane.js');
console.log(Airplane.displayAirplane)());
