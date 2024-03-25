const googleDatabase = [
  "cats.com",
  "souprecipes.com",
  "flowers.com",
  "animals.com",
  "catpictures.com",
  "myfavoritecats.com",
  "myfavoritecats2.com",
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((x) => x.includes(searchInput));

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch("cat", googleDatabase));

module.exports = googleSearch;
