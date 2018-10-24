let bobsFollowers=['joe','marta','sam', 'erin'];
let tinasFollowers=['sam','marta','elle'];
let mutualFollowers=[];

for (let i=0, i < bobsFollowers.length; i++)
{
for (let j = 0; j < tinasFollowers.length; j++) {

if (bobsFollowers[1] === tinasFollowers[j]) {
  mutualFollowers.push(bobsFollowers[1]);
    }
  }
};
