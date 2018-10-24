const animals=['cat','dog','bird'];
const foundAnimal=animals.findIndex(animal => {
  return animal=== 'cat'
});
const startsWtithD=animals.findIndex(animal => {
  return animal[0] === 'c' ? true : false;
});
