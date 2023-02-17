export default async function createTable(obj, unit) {
    const API_KEY = 'bbe781ed4570308e5b1e9e823fab064d';
    const table = document.getElementById('tbl');
    const row1 = document.createElement('tr');
    table.appendChild(row1);
    const row2 = document.createElement('tr');
    table.appendChild(row2);
    const row3 = document.createElement('tr');
    table.appendChild(row3);

    let resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${obj.lat}&lon=${obj.lon}&appid=${API_KEY}&units=${unit}`);
    let data = await resp.json();
    console.log(data);

    // main loop
    for (let i = 0; i < 16; i++) {

        // get time
        let time = new Date(data.list[i].dt * 1000);
        let timeConverted = time.toLocaleTimeString("en-US");



        let hour = document.createElement('td');
        hour.innerHTML = timeConverted.slice(0, timeConverted.length - 9) + timeConverted.slice(timeConverted.length - 3);
        row1.appendChild(hour);
        let condition = document.createElement('td');
        let img = document.createElement('img');
        img.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
        condition.appendChild(img);
        row2.appendChild(condition);
        let temp = document.createElement('td');
        temp.innerHTML = Math.trunc(data.list[i].main.temp) + '&deg';
        row3.appendChild(temp);
    }

}