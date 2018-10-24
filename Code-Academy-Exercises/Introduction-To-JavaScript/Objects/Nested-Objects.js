let spaceship={
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model:"91031-XLT"
    focalLength: 2032
  }
},
crew: {
   captain: {
     name: 'Sandra',
     degree: 'Computer Engineering',
     encourageTeam() { console.log('We can do it!') },
    'favorite foods': ['cookies', 'cakes', 'candy'] }
 },
 engine: {
   model: "Nimbus2000"
 },
 nanoelectronics: {
   computer: {
     terabytes: 100,
     monitors: "HD"
   },
   backup: {
     battery: "Lithium",
     terabytes: 50
   }
 }
};









let spaceship={
  passengers: [{name: 'Space Dog'}],
  telescope: {
    yearBuilt: 2018,
    model:"91031-XLT"
    focalLength: 2032
  }
},
crew: {
   captain: {
     name: 'Sandra',
     degree: 'Computer Engineering',
     encourageTeam() { console.log('We can do it!') },
    'favorite foods': ['cookies', 'cakes', 'candy'] }
 },
 engine: {
   model: "Nimbus2000"
 },
 nanoelectronics: {
   computer: {
     terabytes: 100,
     monitors: "HD"
   },
   backup: {
     battery: "Lithium",
     terabytes: 50
   }
 }
};
let capFave=spaceship.cre.captain['favorite foods'][0];
let firstPassenger=spaceship.passengers[0];
