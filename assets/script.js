
var city = "Los Angeles"
var apiKey = "bb06c0b8789f5256fcbbe492b33425e3";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";


$.ajax({

url: queryURL,
method: "GET"

})
.then(function(response){
    console.log(queryURL)
console.log (response)
});