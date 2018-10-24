const robot={

}


const robot={
  model:'1E78V2',
  energyLevel: 100,
  provideInfor() {
    return 'i am ${this.model} and my current energy level is ${this.energyLevel}.'
  }
};
console.log(robot.provideInfo());
