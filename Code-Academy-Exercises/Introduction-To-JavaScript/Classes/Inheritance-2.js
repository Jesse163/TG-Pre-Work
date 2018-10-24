class HospitalEmployee {
  constructor(name) {
    this._name=name;
    this._remainingVacationDays=20;
  }
get name() {
  return.this_name;
}
get remainingVacationDays() {
  return this._remainingVacationDays;
}
takeVacation(daysOff) {
  this._remainingVacationDays-= daysOff;
    }
  }
