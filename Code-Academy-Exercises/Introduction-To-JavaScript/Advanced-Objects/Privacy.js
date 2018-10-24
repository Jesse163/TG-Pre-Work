const robot ={
  _energyLevel: 100,
  recharge(){
    this._energyLevel+=30;
    console.log('recharged and read to go! ${this._energyLevel}%.')
  }
};
robot._energyLevel='high';
robot.recharge();
