const fetch = require("node-fetch");
const url1 =
  "https://jsonmock.hackerrank.com/api/movies/search/?Title=Deathly";
const url2 = "https://jsonmock.hackerrank.com/api/movies/search/?Title=Goblet";
// result = {};

//  YOUR CODE HERE

// fetch from two urls (both will be arrays of objects)

fetch(url1, {
    method: "GET",
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (info) {
    console.log(info.data);
  })
  .catch(function (error) {
    console.log(error, "<-- error");
  });

fetch(url2, {
    method: "GET",
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (info2) {
    console.log(info2.data);
  })
  .catch(function (error) {
    console.log(error, "<-- error");
  });

// console.log(result);