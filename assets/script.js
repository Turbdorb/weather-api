var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=6788bcc0725766846d2e8c90df441b50"
// "https://api.openweathermap.org/data/2.5/weather?q={CITY-NAME}&appid={API-KEY}" 

function getApi(requestUrl) {
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then( function(data){
            console.log(data);
        });
}

getApi(requestUrl);

$('#searchBtn').on('click', function () {
    var cityName = $('#cityInput').val();
    console.log(cityName);

    let reqUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=6788bcc0725766846d2e8c90df441b50`;
    getApi(reqUrl);
})