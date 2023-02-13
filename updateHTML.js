function updateHTML(obj, wind_unit) {

    const conditions_box = document.getElementById('conditions');
    const location_box = document.getElementById('location');
    const degrees_box = document.getElementById('degrees');
    const feels_like_box = document.getElementById('feels_like');
    const wind_box = document.getElementById('wind');
    const humidity_box = document.getElementById('humidity');


    conditions_box.innerHTML = obj.conditions;
    location_box.innerHTML = obj.name;
    degrees_box.innerHTML = obj.temp + '&deg';
    feels_like_box.innerHTML = 'Feels Like: ' + obj.feels_like + '&deg';
    wind_box.innerHTML = 'Wind: ' + obj.wind_speed + wind_unit;
    humidity_box.innerHTML = 'Humidity: ' + obj.humidity + '%';


}

export { updateHTML as default };

