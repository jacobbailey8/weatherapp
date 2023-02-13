async function getWeatherData(locationName) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationName + '&APPID=bbe781ed4570308e5b1e9e823fab064d&units=imperial');
    const data = await response.json();
    return data;

}

function updateObject(originalObj, updatedObject) {
    updatedObject.name = originalObj.name + ', ' + originalObj.sys.country;
    updatedObject.temp = originalObj.main.temp;
    updateObject.feels_like = originalObj.main.feels_like;
    updatedObject.wind_speed = originalObj.wind.speed;
    updatedObject.humidity = originalObj.main.humidity;
    updatedObject.conditions = originalObj.weather[0].main;
}

const input = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
let locationName = "London";
let currentObj = await getWeatherData(locationName);
let newObject = {};


searchBtn.onclick = async function () {
    locationName = input.value;
    currentObj = await getWeatherData(locationName);
    updateObject(currentObj, newObject);




}





