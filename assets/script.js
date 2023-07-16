// "https://api.openweathermap.org/data/2.5/weather?q={CITY-NAME}&appid={API-KEY}" 
// "https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
var todaysDate = dayjs().format("(MM/DD/YYYY)");

$('#searchBtn').on('click', function() {
    var inputCity = $('#cityInput').val();
    console.log(inputCity);

    var cityURL = "https://api.openweathermap.org/data/2.5/weather?q=" + inputCity +"&units=imperial&appid=6788bcc0725766846d2e8c90df441b50"

    fetch(cityURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            $('#cityName').text(inputCity + ' ' + todaysDate);
            $('#temperature').text(data.main.temp + " °F");
            $('#wind').text(data.wind.speed + " MPH");
            $('#humidity').text(data.main.humidity + "%");
            var lat = (data.coord.lat);
            var lon = (data.coord.lon);
            console.log(lat);
            console.log(lon);
            getCoords(lat, lon);
        })
})

function getCoords(lat, lon) {
    var coordsURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&exclude=minutely,hourly&appid=6788bcc0725766846d2e8c90df441b50";

    fetch(coordsURL)
        .then(function (response) {
            return response.json();
        })
        .then (function (data) {
            console.log(data);

            $('#day1Date').text(dayjs(data.list[4].dt_txt).format('MM/DD/YYYY'));
            $('#day1Temp').text(data.list[4].main.temp + " °F");
            $('#day1Wind').text(data.list[4].wind.speed + " MPH");
            $('#day1Humidity').text(data.list[4].main.humidity + "%");
            
            $('#day2Date').text(dayjs(data.list[12].dt_txt).format('MM/DD/YYYY'));
            $('#day2Temp').text(data.list[12].main.temp + " °F");
            $('#day2Wind').text(data.list[12].wind.speed + " MPH");
            $('#day2Humidity').text(data.list[12].main.humidity + "%");
            
            $('#day3Date').text(dayjs(data.list[20].dt_txt).format('MM/DD/YYYY'));
            $('#day3Temp').text(data.list[20].main.temp + " °F");
            $('#day3Wind').text(data.list[20].wind.speed + " MPH");
            $('#day3Humidity').text(data.list[20].main.humidity + "%");
            
            $('#day4Date').text(dayjs(data.list[28].dt_txt).format('MM/DD/YYYY'));
            $('#day4Temp').text(data.list[28].main.temp + " °F");
            $('#day4Wind').text(data.list[28].wind.speed + " MPH");
            $('#day4Humidity').text(data.list[28].main.humidity + "%");
            
            $('#day5Date').text(dayjs(data.list[36].dt_txt).format('MM/DD/YYYY'));
            $('#day5Temp').text(data.list[36].main.temp + " °F");
            $('#day5Wind').text(data.list[36].wind.speed + " MPH");
            $('#day5Humidity').text(data.list[36].main.humidity + "%");
        })
}

// store inputCity into local storage and get from local storage then append as a button for user
function prevCity() {

}