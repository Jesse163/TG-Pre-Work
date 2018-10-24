const words=['unique', 'uncanny','pique','oxymoron','quise'];
console.log(words.some(() => {
  return word.length < 6;
}));





const words=['unique', 'uncanny','pique','oxymoron','quise'];
console.log(words.some(() => {
  return word.length < 6;
}));
const interestingWords= words.filter((word) => {return word.length > 5});
console.log(interestingWords.every((word) => {return word.length > 5}));
