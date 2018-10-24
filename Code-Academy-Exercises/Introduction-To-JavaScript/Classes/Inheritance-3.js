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
  class Nurse extends HospitalEmployee{
    constructor(name,certifications) {
      super(name);
      this._certifications=certifications;
    }
  }
  const nurse01ynyk=new Nurse('Olynyk', ['Trauma','Pediatrics']);
