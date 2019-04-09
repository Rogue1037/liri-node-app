//require("dotenv").config();
var axios = require("axios");
//var keys = require("./keys.js");


//var spotify = new Spotify(keys.spotify);

var userInput = process.argv.slice(2).join(" ");

// axios.get("https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=codingbootcamp&date=all").then(
//   function(response) {

//     console.log(response);
//     console.log(JSON.stringify(data[0], null, 2));

//   }
// );


axios.get("http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=trilogy").then(
  function (response) {
    console.log(response.data.Ratings);
    console.log("\n");
    console.log("The Title of the movie is " + response.data.Title);
    console.log("\n");
    console.log("The movie came out in " + response.data.Released);
    console.log("\n");
    console.log("This movie was rated on imdb, a " + response.data.imdbRating);
    console.log("\n");
    //console.log("Rotten Tomatoes score for this movie is " + response.data.Ratings[{ Source: "Rotten Tomatoes", Value: "",}]);
    console.log("\n");
    console.log("This movie was produced in the good old " + response.data.Country);
    console.log("\n");
    console.log("The spoken language in the movie is " + response.data.Language);
    console.log("\n");
    console.log("The humans that brought it to life were " + response.data.Actors);
    console.log("\n");
    console.log("The movie is about " + response.data.Plot);
    console.log("\n");

  });

if (userInput === undefined) {
  axios.get("http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy").then(function (response) {
    console.log(response.data);
  });
}
