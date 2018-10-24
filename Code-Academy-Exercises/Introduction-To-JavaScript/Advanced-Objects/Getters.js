const robot ={
  _model:'1E78V2',
  _energyLevel: 100,
};





const robot ={
  _model:'1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel==='number') {
      return 'my current energy level' + this.energyLevel
    } else {
      return "System malfunction: cannot find energy level"
    }
  }
};
console.log(robot.energyLevel);
