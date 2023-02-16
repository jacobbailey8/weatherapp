import updateHTML from "./updateHTML.js";

const toggleBtn = document.getElementById('toggle-temp');
const input = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
let locationName = "London";
let currentObj = await getWeatherDataF(locationName);
let newObject = {};

console.log(input);
console.log(searchBtn)
console.log(toggleBtn)

async function getWeatherDataF(locationName) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationName + '&APPID=bbe781ed4570308e5b1e9e823fab064d&units=imperial');
    const data = await response.json();
    return data;

}

async function getWeatherDataC(locationName) {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + locationName + '&APPID=bbe781ed4570308e5b1e9e823fab064d&units=metric');
    const data = await response.json();
    return data;

}

async function searchAndUpdate() {
    if (toggleBtn.classList.contains('far')) {
        currentObj = await getWeatherDataF(locationName);
        updateObject(currentObj, newObject);
        updateHTML(newObject, " MPH");
    }
    else {
        currentObj = await getWeatherDataC(locationName);
        updateObject(currentObj, newObject);
        updateHTML(newObject, ' m/s');
    }

}

function updateObject(originalObj, updatedObject) {
    // left box
    updatedObject.name = originalObj.name + ', ' + originalObj.sys.country;
    updatedObject.temp = Math.trunc(originalObj.main.temp);
    updatedObject.feels_like = Math.trunc(originalObj.main.feels_like);
    updatedObject.wind_speed = originalObj.wind.speed;
    updatedObject.humidity = originalObj.main.humidity;
    updatedObject.conditions = originalObj.weather[0].main;

    // right box
    updatedObject.high = Math.trunc(originalObj.main.temp_max);
    updatedObject.low = Math.trunc(originalObj.main.temp_min);
    updatedObject.sunrise = originalObj.sys.sunrise;
    updatedObject.sunset = originalObj.sys.sunset;
    updatedObject.visibility = originalObj.visibility;
    updatedObject.pressure = originalObj.main.pressure;

}

searchBtn.onclick = () => { locationName = input.value; searchAndUpdate() };

toggleBtn.onclick = async function () {
    if (toggleBtn.classList.contains('far')) {
        toggleBtn.classList.remove('far');
        toggleBtn.classList.add('cel');
    }
    else {
        toggleBtn.classList.add('far');
        toggleBtn.classList.remove('cel');
    }
    searchAndUpdate();
}

updateObject(currentObj, newObject);
updateHTML(newObject, "MPH")
console.log(currentObj);




