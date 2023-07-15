// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
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
            var lat = (data.coord.lat);
            var lon = (data.coord.lon);
            console.log(lat);
            console.log(lon);
            getCoords(lat, lon);
        })
})

function getCoords(lat, lon) {
    var coordsURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&cnt=6&units=imperial&exclude=minutely,hourly&appid=6788bcc0725766846d2e8c90df441b50";

    fetch(coordsURL)
        .then(function (response) {
            return response.json();
        })
        .then (function (data) {
            console.log(data);

            $('#day1Date').text(dayjs(data.list[1].dt_txt).format('MM/DD/YYYY'));
            $('#day1Temp').text(data.list[1].main.temp + " Degree F");
            $('#day1Wind').text(data.list[1].wind.speed + " MPH");
            $('#day1Humidity').text(data.list[1].main.humidity + "%");
        })

}