const robot={
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-Plated',
  energyLevel: 75
};
const robotKeys=Object.keys();
console.log(robotKeys);
console.log(robotEntries);
console.log(newRobot);





const robot={
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-Plated',
  energyLevel: 75
};
const robotKeys=Object.keys(robot);
console.log(robotKeys);
const robotEntries=Object.entries(robot)
console.log(robotEntries);
const newRobot=Object.assign({laserBlaster: true, voiceRecohnition: true}, robot);
console.log(newRobot);
