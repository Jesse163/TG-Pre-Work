const randomNumbers=[375, 200, 3.14, 7, 13, 852];

const favoriteWords = ['nostalgia','hyperbole','fervent'];






const randomNumbers=[375, 200, 3.14, 7, 13, 852];
const smallNumbers= randomNumbers.filter(num => {
  return num < 250;
})
const favoriteWords=['nostalgia','hyperbole','fervent'];
const longFavoriteWords= favoriteWords.filter(word => {
  return word.length > 7;
})
