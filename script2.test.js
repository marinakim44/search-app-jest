const swapi = require("./script2");

it("calls swapi to get people", () => {
  expect.assertions(2);
  return swapi.getPeople().then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

// OR AS BELOW
// it("calls swapi to get people", (done) => {
//   expect.assertions(1);
//   return swapi.getPeople().then((data) => {
//     expect(data.count).toEqual(82);
//     done();
//   });
// });

it("calls swapi to get people with a promise function", () => {
  expect.assertions(2);
  return swapi.getPeoplePromise().then((data) => {
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it("getPeople returns count and results", () => {
  const mockFetch = jest.fn().mockReturnValue(
    Promise.resolve({
      json: () =>
        Promise.resolve({
          count: 82,
          results: [0, 1, 2, 3, 4, 5],
        }),
    })
  );

  expect.assertions(3);
  return swapi.getPeoplePromise(mockFetch).then((data) => {
    expect(mockFetch.mock.calls.length).toBe(0);
    expect(data.count).toEqual(82);
    expect(mockFetch).not.toBeCalledWith("https://swapi.co/api/people");
  });
});
