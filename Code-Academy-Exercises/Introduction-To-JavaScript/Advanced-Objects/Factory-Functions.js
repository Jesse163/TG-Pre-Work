const robotFactory =(model,mobile) => {
  return{
    model:model,
    mobile:mobile,
    beep() {
      console.log('beep');
    }
  };
};
const tincan=robotFactory('P-500', true);
tincan.beep();
