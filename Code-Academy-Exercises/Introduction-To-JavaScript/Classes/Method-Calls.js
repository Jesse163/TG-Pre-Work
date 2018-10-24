class Surgeon {
  constructor(name, department) {
  this.name=name;
  this.department=department;
  this._remainingVacationDays=20;
  }
}
get name() {
  return this._name;
}
get department () {
  return  this.department;
}
get _remainingVacationDays() {
  return this._remainingVacationDays;
}
takeVacationDays(daysOff) {
  this._remainingVacationDays-=daysOff;
}
const surgeonCurry= new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant= new Surgeon('Durant', 'Orthopedics');
console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry._remainingVacationDays);
