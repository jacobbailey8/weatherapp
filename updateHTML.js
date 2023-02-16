function updateHTML(obj, wind_unit) {

    // set conditions icon
    let icon;
    switch (obj.conditions.toUpperCase()) {
        case 'CLOUDS':
            icon = '<i class="bi bi-cloud-fill"></i> ';
            break;
        case 'RAIN':
            icon = '<i class="bi bi-cloud-rain-fill"></i> ';
            break;
        case 'CLEAR':
            icon = '<i class="bi bi-circle-fill"></i> ';
            break;
        case 'THUNDERSTORM':
            icon = '<i class="bi bi-cloud-lightning-rain-fill"></i> ';
            break;
        case 'DRIZZLE':
            icon = '<i class="bi bi-cloud-drizzle-fill"></i> ';
            break;
        case 'SNOW':
            icon = '<i class="bi bi-cloud-snow-fill"></i> ';
            break;
        default:
            icon = '<i class="bi bi-cloud-fog2-fill"></i> '
    }

    // convert times from unix utc to local
    let sunriseTime = new Date(obj.sunrise * 1000);
    let sunsetTime = new Date(obj.sunset * 1000);
    let sunriseVal = sunriseTime.toLocaleTimeString("en-US");
    let sunsetVal = sunsetTime.toLocaleTimeString("en-US");


    // left box
    const conditions_box = document.getElementById('conditions');
    const location_box = document.getElementById('location');
    const degrees_box = document.getElementById('degrees');
    const feels_like_box = document.getElementById('feels_like');
    const wind_box = document.getElementById('wind');
    const humidity_box = document.getElementById('humidity');

    // right box
    const high = document.getElementById('high');
    const low = document.getElementById('low');
    const sunrise = document.getElementById('sunrise');
    const sunset = document.getElementById('sunset');
    const visibility = document.getElementById('visibility');
    const pressure = document.getElementById('pressure');


    // left box
    conditions_box.innerHTML = icon + obj.conditions;
    location_box.innerHTML = obj.name;
    degrees_box.innerHTML = obj.temp + '&deg';
    feels_like_box.innerHTML = 'Feels Like: ' + obj.feels_like + '&deg';
    wind_box.innerHTML = '<i class="bi bi-wind"></i> &nbspWind: ' + obj.wind_speed + wind_unit;
    humidity_box.innerHTML = '<i class="bi bi-droplet-half"></i> &nbspHumidity: ' + obj.humidity + '%';

    //right box
    high.innerHTML = '<i class="bi bi-thermometer-high"></i> High: ' + obj.high + '&deg';
    low.innerHTML = '<i class="bi bi-thermometer-low"></i> Low: ' + obj.low + '&deg';
    sunrise.innerHTML = '<i class="bi bi-sunrise-fill"></i> &nbspSunrise: ' + sunriseVal.slice(0, sunriseVal.length - 6) + sunriseVal.slice(sunriseVal.length - 3);
    sunset.innerHTML = '<i class="bi bi-sunset-fill"></i> &nbspSunset: ' + sunsetVal.slice(0, sunsetVal.length - 6) + sunsetVal.slice(sunsetVal.length - 3);
    visibility.innerHTML = 'Visibility: ' + obj.visibility + ' m';
    pressure.innerHTML = 'Pressure: ' + obj.pressure + ' hPa';

}

export { updateHTML as default };

