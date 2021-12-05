import { titles, director, description } from './mock.js';
import { random, randomDate, randomInt, getRandomText } from './utils.js';

function createmockData() {
  let arr = []
  for (let i = 0; i < 10; i++) {
    let cart = {
      titel: getRandomText(titles),
      releseDate: randomDate('1991-01-01', '2021-12-31'),
      plot: getRandomText(description),
      poster: 'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg',
      boxOffice: randomInt(300000000, 600000000),
      raiting: random(1, 10),
      director: getRandomText(director),
    }
    arr.push(cart);
  }
  console.log(arr);
  return arr;
};

export { createmockData };

