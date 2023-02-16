function updateHTML(obj, wind_unit) {

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
    conditions_box.innerHTML = '<i class="bi bi-cloud-fill"></i> ' + obj.conditions;
    location_box.innerHTML = obj.name;
    degrees_box.innerHTML = obj.temp + '&deg';
    feels_like_box.innerHTML = 'Feels Like: ' + obj.feels_like + '&deg';
    wind_box.innerHTML = 'Wind: ' + obj.wind_speed + wind_unit;
    humidity_box.innerHTML = 'Humidity: ' + obj.humidity + '%';

    //right box
    high.innerHTML = 'High: ' + obj.high + '&deg';
    low.innerHTML = 'Low: ' + obj.low + '&deg';
    sunrise.innerHTML = 'Sunrise: ' + obj.sunrise;
    sunset.innerHTML = 'Sunset: ' + obj.sunset;
    visibility.innerHTML = 'Visibility: ' + obj.visibility + ' m';
    pressure.innerHTML = 'Pressure: ' + obj.pressure + ' hPa';

}

export { updateHTML as default };

