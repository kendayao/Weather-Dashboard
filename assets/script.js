


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
var imageIcon = response.weather[0].icon
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var currentDate = (mm + "/" + dd + "/" + yyyy)


h2El=$("<h2>")
h2El.text(city + " (" + currentDate + ")")
$("#current-weather-display").append(h2El);



imageEl=$("<img>")
imageEl.attr("src", "http://openweathermap.org/img/wn/" + imageIcon + "@2x.png")
imageEl.attr("class", "weather-icon")
$("#current-weather-display").append(imageEl)

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

var city =$("input").val();
    var apiKey = "bb06c0b8789f5256fcbbe492b33425e3";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";
    
    $.ajax({

        url: queryURL,
        method: "GET"
        
        })
        .then(function(response){
            console.log(queryURL)
        console.log (response)

        });

var today = new Date();
var dd = today.getDate();
var dd1 = today.getDate()+1;
var dd2 = today.getDate()+2;
var dd3= today.getDate()+3;
var dd4 = today.getDate()+4;
var dd5 = today.getDate()+5;
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
var currentDate = (mm + "/" + dd + "/" + yyyy)
var day1= (mm + "/" + dd1 + "/" + yyyy)
var day2= (mm + "/" + dd2 + "/" + yyyy)
var day3= (mm + "/" + dd3 + "/" + yyyy)
var day4= (mm + "/" + dd4 + "/" + yyyy)
var day5= (mm + "/" + dd5 + "/" + yyyy)

        h3El=$("<h3>")
    h3El.text("5-Day Forcast")
    $("#future-weather-display").append(h3El);


    divEl1=$("<div>")
    divEl1.attr("class", "day1")
    $("#future-weather-display").append(divEl1);
    pEl=$("<p>")
    pEl.text(day1)
    $(divEl1).append(pEl);

    divEl2=$("<div>")
    divEl2.attr("class", "day2")
    $("#future-weather-display").append(divEl2);
    pEl2=$("<p>")
    pEl2.text(day2)
    $(divEl2).append(pEl2);

    divEl3=$("<div>")
    divEl3.attr("class", "day3")
    $("#future-weather-display").append(divEl3);
    pEl3=$("<p>")
    pEl3.text(day3)
    $(divEl3).append(pEl3);

    divEl4=$("<div>")
    divEl4.attr("class", "day4")
    $("#future-weather-display").append(divEl4);
    pEl4=$("<p>")
    pEl4.text(day4)
    $(divEl4).append(pEl4);

    divEl5=$("<div>")
    divEl5.attr("class", "day5")
    $("#future-weather-display").append(divEl5);
    pEl5=$("<p>")
    pEl5.text(day5)
    $(divEl5).append(pEl5);
    

 


});