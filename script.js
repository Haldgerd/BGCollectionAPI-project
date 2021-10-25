// tried adding type: module to JSON file, didn't work, tried adding type module to script.js threw error - about MIME
// import dataSet from "./dataSet.json"
// console.log(dataSet);

const api_url = `https://api.jokes.one/`;

const data = {
  name: "Data 1"
  , date: 20
  , author: "Chris Woo"
  , language: "Python"
}


//trying to access LOCAL json via fetch - THIS WORKS but will work only in FIREFOX not CHROME!!!!
// fetch("./dataSet.json")
//   .then(response => response.json())
//   .then(json => console.log(json));


// api url

// const gamesContainer = document.querySelector(".games__container");

// function get_joke(url) {
//   fetch(url + 'jod?category=animal')
//     .then(response => response.json()) // returns a promise
//     .then(data => JSON.stringify(data, function replacer(key, value) {
//       return `${key}: ${value}`;
//     }, 2)); // additional argument for pretty format output
//     // full syntax of stringify is let json = JSON.stringify(value[, replacer, space]) rplaceer is a function that returns aka. filters specific properties.

// }

// get_joke(api_url);


// testing parse and stringify methods for json
let dataJson = JSON.stringify(data); //changes object to JSON

console.log(dataJson);

dataJson = JSON.parse(dataJson); // parse changes JSON data format into object
console.log(dataJson);
