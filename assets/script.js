
// check local storage for any saved cities to display on page
recentSearch();

var cityClicked;
var city;

// When search button is clicked, creates a button for the city and calls to API
$("#searchbutton").on("click", function(event){
    event.preventDefault();
    if ($(".city-input").val()==""){
        alert("Please enter a city")
    }else{
    
    buttonCreation();
    apiCall();
}
});

// When saved city button is city clicked,  calls to weather API
$(".cityButton").on("click", function(event){
  
    event.preventDefault();
    
    cityClicked =($(this).attr("cityname"));
    console.log(cityClicked)
    apiCall();
    });


// function to call open weather map API for current and future weather and UV index
function apiCall(){
    
    $("#current-weather-display").empty();
    if ($("input").val()==""){
    city = cityClicked
    }else{
    city = $("input").val();    
    }

    var apiKey = "bb06c0b8789f5256fcbbe492b33425e3";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial";
    // ajax call to get current weather condition
    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response){
    
    var lat = response.coord.lat
    var lon = response.coord.lon

    var temperature = response.main.temp;
    var humidity = response.main.humidity;
    var windSpeed= response.wind.speed;
    var imageIcon = response.weather[0].icon
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    var currentDate = (mm + "/" + dd + "/" + yyyy)

    // display current date
    h2El=$("<h2>")
    h2El.text(city + " (" + currentDate + ")")
    $("#current-weather-display").append(h2El);

    // display weather icon
    imageEl=$("<img>")
    imageEl.attr("src", "http://openweathermap.org/img/wn/" + imageIcon + "@2x.png")
    imageEl.attr("class", "weather-icon")
    $("#current-weather-display").append(imageEl)

    // display current temperature
    pEl1=$("<p>")
    pEl1.text("Temperature: " + temperature)
    $("#current-weather-display").append(pEl1)

    // display current humidity
    pEl2=$("<p>")
    pEl2.text("Humidity: " + humidity)
    $("#current-weather-display").append(pEl2)

    // display current wind speed
    pEl3=$("<p>")
    pEl3.text("Wind Speed: " + windSpeed)
    $("#current-weather-display").append(pEl3)

    // horizontal line
    hrEl = $("<hr>")
    $("#current-weather-display").append(hrEl)


    var queryURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=bb06c0b8789f5256fcbbe492b33425e3"
    // AJAX call to UV index API
    $.ajax({

        url:queryURL,
        method: "GET"
    }).then(function(response){
        // display UV index
    uvIndex=response.value
    pEluv=$("<p>")
    pEluv.text("UV Index: " + uvIndex)
    pEluv.attr("class", "uvindex")
    $(pEl3).append(pEluv)
    // styling of UV index based on current index
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

    // get future date
    // today+1
    var today = new Date();
    var date1=new Date(today.setDate(today.getDate()+1))
    var dd1 = date1.getDate();
    var mm1 = date1.getMonth()+1

    // today+2
    var today = new Date();
    var date2=new Date(today.setDate(today.getDate()+2))
    console.log(date2)
    var dd2 = date2.getDate();
    var mm2 = date2.getMonth()+1
    
    // today+3
    var today = new Date();
    var date3=new Date(today.setDate(today.getDate()+3))
    var dd3= date3.getDate();
    var mm3 = date3.getMonth()+1
    
    // today+4
    var today = new Date();
    var date4=new Date(today.setDate(today.getDate()+4))
    var dd4 = date4.getDate();
    var mm4 = date4.getMonth()+1
    
    //today+5
    var today = new Date();
    var date5=new Date(today.setDate(today.getDate()+5))
    var dd5 = date5.getDate();
    var mm5 = date5.getMonth()+1

    var yyyy = today.getFullYear();
    var day1= (mm1 + "/" + dd1 + "/" + yyyy)
    var day2= (mm2 + "/" + dd2 + "/" + yyyy)
    var day3= (mm3 + "/" + dd3 + "/" + yyyy)
    var day4= (mm4 + "/" + dd4 + "/" + yyyy)
    var day5= (mm5 + "/" + dd5 + "/" + yyyy)

    // display 5 day forecast header
    var h3El=$("<h3>")
    h3El.text("5-Day Forcast")
    $("#current-weather-display").append(h3El);

    // display date, weather icon, temperature, and humidity for 5 day forecast
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
    $(".city-input").val("");
});

}

// function to check for any saved cities in local storage and creates a button for them
function recentSearch(){
    storedCity = (JSON.parse(localStorage.getItem("storedCity"))) || []

    for (var i=0; i<storedCity.length; i++){
    var buttonEl = $("<button>" + storedCity[i]+ "</button>")
     buttonEl.attr("cityname", storedCity[i])
     buttonEl.attr("class", "cityButton")
     $("#previous-city").append(buttonEl)
     var brEl =$("<br>")
     $("#previous-city").append(brEl)
    }
};

// creates a button for each city searched
function buttonCreation(){
    var city =$("input").val();
    storedCity.push(city)
    localStorage.setItem("storedCity", JSON.stringify(storedCity))
        
    var buttonEl1 = $("<button>" +  city + "</button>")
    buttonEl1.attr("cityname", city)
    buttonEl1.attr("class", "cityButton")
    
    $("#previous-city").append(buttonEl1)
    var brEl1 =$("<br>")
    $("#previous-city").append(brEl1)
    }

    // clear button function
    $("#clearbutton").on("click", function(){
        localStorage.removeItem("storedCity")
        $("#previous-city").empty();
        location.reload();
    });
    



    

    