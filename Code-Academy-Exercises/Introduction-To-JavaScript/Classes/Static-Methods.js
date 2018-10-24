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
    static generatePassword() {
      return Math.floor(Math.random() * 1000;
    }
  }
  class Nurse extends HospitalEmployee{
    constructor(name,certifications) {
      super(name);
      this._certifications=certifications;
    }
    get certifications() {
      return.this_certifications;
    }
    addCertification(newCertification) {
      this._certifications.push(newCertification);
    }
  }
  const nurse01ynyk=new Nurse('Olynyk', ['Trauma','Pediatrics']);
  nurse01ynyk.takeVacationDays(5);
  console.log(nurse01ynyk.remainingVacationDays);
  nurse01ynyk.addCertification('Genetics');
  console.log(nurse01ynyk.certifications);
