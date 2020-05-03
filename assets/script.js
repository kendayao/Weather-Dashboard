



$("#searchbutton").on("click", function(event){
    event.preventDefault();
    var city =$("input").val();
    var apiKey = "bb06c0b8789f5256fcbbe492b33425e3";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    
    $("#current-weather-display").empty();


$.ajax({

url: queryURL,
method: "GET"

})
.then(function(response){
    console.log(queryURL)
console.log (response)

var temperature = response.main.temp;
var humidity = response.main.humidity;
var windSpeed= response.wind.speed;

h2El=$("<h2>")
h2El.text(city)
$("#current-weather-display").append(h2El)

pEl1=$("<p>")
pEl1.text("Temperature: " + temperature)
$("#current-weather-display").append(pEl1)

pEl2=$("<p>")
pEl2.text("Humidity: " + humidity)
$("#current-weather-display").append(pEl2)

pEl3=$("<p>")
pEl3.text("Wind Speed: " + windSpeed)
$("#current-weather-display").append(pEl3)

});



});