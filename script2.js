const getPeoplePromise = () => {
  return fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();

  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = { getPeople, getPeoplePromise };
