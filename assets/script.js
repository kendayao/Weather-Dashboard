
recentSearch();

var cityClicked;
var city;
$("#searchbutton").on("click", function(event){
    event.preventDefault();
    buttonCreation();
    apiCall();
});

$(".cityButton").on("click", function(event){
            
    
    event.preventDefault();
    cityClicked =($(this).attr("cityname"));
    console.log(cityClicked)
    apiCall();
    });


function apiCall(){
    $("#current-weather-display").empty();
    $("#future-weather-display").empty();

    if ($("input").val()==""){
    city = cityClicked
    }else{
    city = $("input").val();    
    }
    var apiKey = "bb06c0b8789f5256fcbbe492b33425e3";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";

$.ajax({

url: queryURL,
method: "GET"

})
.then(function(response){
    
    var lat = response.coord.lat
    var lon = response.coord.lon
//     var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=bb06c0b8789f5256fcbbe492b33425e3"

//     $.ajax({

//         url:queryURL,
//         method: "GET"
//     })
// .then(function(response){


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

hrEl = $("<hr>")
$("#current-weather-display").append(hrEl)


var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=bb06c0b8789f5256fcbbe492b33425e3"

    $.ajax({

        url:queryURL,
        method: "GET"
    })
.then(function(response){
 uvIndex=response.value
 pEluv=$("<p>")
pEluv.text("UV Index: " + uvIndex)
pEluv.attr("class", "uvindex")

$(pEl3).append(pEluv)
if(uvIndex<5){
    $(".uvindex").css("background-color", "green");
}else if(uvIndex>5 && uvIndex<7){
    $(".uvindex").css("background-color", "yellow");
}else{
    $(".uvindex").css("background-color", "red");
}

});
});


    var apiKey = "bb06c0b8789f5256fcbbe492b33425e3";
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey + "&units=imperial";
    
    $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response){
            console.log(queryURL)
        console.log (response)

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

    var h3El=$("<h3>")
    h3El.text("5-Day Forcast")
    $("#current-weather-display").append(h3El);


    var divEl1=$("<div>")
    divEl1.attr("class", "day1")
    $("#current-weather-display").append(divEl1);
    pEldate1=$("<p>")
    pEldate1.text(day1)
    $(divEl1).append(pEldate1);
    var imageEl1 =$("<img>")
    imageEl1.attr("src", "http://openweathermap.org/img/wn/" + response.list[4].weather[0].icon + "@2x.png")
    imageEl1.attr("class", "future-weather-icon")
    $(divEl1).append(imageEl1)
    var pEltemp1 =$("<p>")
    pEltemp1.text("Temp: " + response.list[4].main.temp)
    $(divEl1).append(pEltemp1)
    var pElhum1 =$("<p>")
    pElhum1.text("Humidity: " + response.list[4].main.humidity)
    $(divEl1).append(pElhum1)


    var divEl2=$("<div>")
    divEl2.attr("class", "day2")
    $("#current-weather-display").append(divEl2);
    pEldate2=$("<p>")
    pEldate2.text(day2)
    $(divEl2).append(pEldate2);
    var imageEl2 =$("<img>")
    imageEl2.attr("src", "http://openweathermap.org/img/wn/" + response.list[12].weather[0].icon + "@2x.png")
    imageEl2.attr("class", "future-weather-icon")
    $(divEl2).append(imageEl2)
    var pEltemp2 =$("<p>")
    pEltemp2.text("Temp: " + response.list[12].main.temp)
    $(divEl2).append(pEltemp2)
    var pElhum2 =$("<p>")
    pElhum2.text("Humidity: " + response.list[12].main.humidity)
    $(divEl2).append(pElhum2)

    var divEl3=$("<div>")
    divEl3.attr("class", "day3")
    $("#current-weather-display").append(divEl3);
    pEldate3=$("<p>")
    pEldate3.text(day3)
    $(divEl3).append(pEldate3);
    var imageEl3 =$("<img>")
    imageEl3.attr("src", "http://openweathermap.org/img/wn/" + response.list[20].weather[0].icon + "@2x.png")
    imageEl3.attr("class", "future-weather-icon")
    $(divEl3).append(imageEl3)
    var pEltemp3 =$("<p>")
    pEltemp3.text("Temp: " + response.list[20].main.temp)
    $(divEl3).append(pEltemp3)
    var pElhum3 =$("<p>")
    pElhum3.text("Humidity: " + response.list[20].main.humidity)
    $(divEl3).append(pElhum3)

    var divEl4=$("<div>")
    divEl4.attr("class", "day4")
    $("#current-weather-display").append(divEl4);
    pEldate4=$("<p>")
    pEldate4.text(day4)
    $(divEl4).append(pEldate4);
    var imageEl4 =$("<img>")
    imageEl4.attr("src", "http://openweathermap.org/img/wn/" + response.list[28].weather[0].icon + "@2x.png")
    imageEl4.attr("class", "future-weather-icon")
    $(divEl4).append(imageEl4)
    var pEltemp4 =$("<p>")
    pEltemp4.text("Temp: " + response.list[28].main.temp)
    $(divEl4).append(pEltemp4)
    var pElhum4 =$("<p>")
    pElhum4.text("Humidity: " + response.list[28].main.humidity)
    $(divEl4).append(pElhum4)

    var divEl5=$("<div>")
    divEl5.attr("class", "day5")
    $("#current-weather-display").append(divEl5);
    pEldate5=$("<p>")
    pEldate5.text(day5)
    $(divEl5).append(pEldate5);
    var imageEl5 =$("<img>")
    imageEl5.attr("src", "http://openweathermap.org/img/wn/" + response.list[36].weather[0].icon + "@2x.png")
    imageEl5.attr("class", "future-weather-icon")
    $(divEl5).append(imageEl5)
    var pEltemp5 =$("<p>")
    pEltemp5.text("Temp: " + response.list[36].main.temp)
    $(divEl5).append(pEltemp5)
    var pElhum5 =$("<p>")
    pElhum5.text("Humidity: " + response.list[36].main.humidity)
    $(divEl5).append(pElhum5)

});
// });
}

function recentSearch(){
    storedCity = (JSON.parse(localStorage.getItem("storedCity"))) || []

    for (var i=0; i<storedCity.length; i++){
        var buttonEl = $("<button>" + storedCity[i]+ "</button>")
     buttonEl.attr("cityname", storedCity[i])
     buttonEl.attr("class", "cityButton")
     $("form").append(buttonEl)
     var brEl =$("<br>")
     $("form").append(brEl)
    }
};

function buttonCreation(){
    
        var city =$("input").val();
        storedCity.push(city)
        localStorage.setItem("storedCity", JSON.stringify(storedCity))
        
       var buttonEl = $("<button>" +  city + "</button>")


    buttonEl.attr("cityname", city)
    buttonEl.attr("class", "cityButton")
    
    $("form").append(buttonEl)
    var brEl =$("<br>")
    $("form").append(brEl)


    }

    
    

    var apiKey = "bb06c0b8789f5256fcbbe492b33425e3";
    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37&appid=bb06c0b8789f5256fcbbe492b33425e3"
    
    "https://api.openweathermap.org/data/2.5/uvi?q=Dallas&appid=bb06c0b8789f5256fcbbe492b33425e3"

    $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response){
            console.log(response)
        });