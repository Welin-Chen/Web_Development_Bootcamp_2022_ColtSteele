const scores = [10, 9, 8, 7];

const [gold, silver, bronze] = scores;

const user = {
  email: "andy@gmail.com",
  password: "fdsi@1!11",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1944,
  died: 2001,
  bio: "Harvey bernard Milk was an Amercian politician",
  city: "San Francisco",
  state: "California",
};

const user2 = {
  email: "sally@gmail.com",
  firstName: "Sally",
  born: 1944,
  city: "Tulsa",
};

// const { firstName, email, lastName, city } = user;

const { born: birthYear, died: deathYear = "N/A" } = user;

// const { city, state, died = "N/A" } = user2;

// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }

// function fullName({ firstName, lastName }) {
//   return `${firstName} ${lastName}`;
// }

const fullName = ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
};

const movies = [
  { title: "Amadeus", score: 99, year: 1984 },
  { title: "Sharknado", score: 35, year: 2013 },
  { title: "13 Going On 30", score: 70, year: 2004 },
  { title: "Waterworld", score: 62, year: 1995 },
  { title: "Jingle All the Way", score: 71, year: 1996 },
  { title: "Parasite", score: 95, year: 2019 },
];

// movies.filter((movie) => movie.score > 90);
movies.filter(({ score }) => score > 90);

// movies.map((movie) => {
//   return `${movie.title}(${movie.year}) is rated: ${movie.score}`;
// });

movies.map(({ title, year, score }) => {
  return `${title}(${year}) is rated: ${score}`;
});

movies.map(({ title, year, score }) => `${title}(${year}) is rated: ${score}`);
