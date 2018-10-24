function robotFactory(model,mobile){
  return {
    model:model,
    mobile:mobile,
    beep() {
      console.log('beep');
    }
  }
}
const newRobot=robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)





function robotFactory(model,mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('beep');
    }
  }
}
const newRobot=robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
