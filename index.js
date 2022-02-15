//jshint esversion:6

const superheroes = require('superheroes');
const supervillains = require('supervillains');

var mySuperHeroName = superheroes.random();
var mySuperVillainName = supervillains.random();

console.log(mySuperHeroName);
console.log(mySuperVillainName);

const Quote = require('inspirational-quotes');
var myQuote = Quote.getRandomQuote();
console.log(myQuote);


const lib = require('thoughts');
var random = lib.random();
console.log(random);


const movieQuote = require("popular-movie-quotes");
var MovieQuote = Quote.getRandomQuote();
console.log(movieQuote.getRandomQuote()); // random movie quote


// creates a local web server and displays the above variables
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Super Hero: " + mySuperHeroName + "\nSuper Villain: " + mySuperVillainName + "\nQuote of the Day " + myQuote + "\nPopular Movie Quotes:" + getRandomQuote + "\nThoughts:" + random);

  const fs = require("fs");
  fs.writeFileSync("file2.txt", "Super Hero: " + mySuperHeroName + "\nSuper Villain: " + mySuperVillainName + "\nQuote of the Day " + myQuote + "\nPopular Movie Quotes:" + getRandomQuote + "\nThoughts:" + random);

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
