let weatherInfo = document.querySelector('.weather-info');

window.onload = () => {
  // Replace ./data.json with your JSON feed
  fetch('https://api.openweathermap.org/data/2.5/weather?id=5108714&appid=1037d7465da87b3383fe0ee40d3d98e0').then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    console.log(data.clouds.all);
    // City Name
    weatherInfo.innerHTML += `<tr><th>City:</th><th>${data.name}</th></tr>`;
    // Convert Temp
    let k = data.main.temp;
    let ftemp = (9 / 5 * (k - 273) + 32);
    // Temp
    weatherInfo.innerHTML += `<tr><th>Temperature:</th> <th>${Math.round(ftemp)}&#8457;</th></tr>`;
    // // Weather Main
    // weatherInfo.innerHTML += `<tr><th>Weather:</th><th>${data.weather.main}</th></tr>`;
    // // Weather Description
    // weatherInfo.innerHTML += `<tr><th>Description:</th> <th>${data.weather.description}</th></tr>`;
    // Clouds
    weatherInfo.innerHTML += `<tr><th>Cloud Cover:</th> <th>${data.clouds.all}%</th></tr>`;
    // Humidity
    weatherInfo.innerHTML += `<tr><th>Humidity:</th><th>${data.main.humidity}%</th></tr>`;
    // // Rain
    // weatherInfo.innerHTML += `<tr><th>Rain:</th> <th>${data.rain}</th></tr>`;
    // // Grab Sun up and down from JSON
    // let sunrise = new Date(data.sys.sunrise);
    // let sunset = new Date(data.sys.sunset);
    // console.log(sunrise);
    // // Sunrise
    // weatherInfo.innerHTML += `<tr><th>Sunrise:</th> <th>${sunrise.toUTCString()}</th></tr>`;
    // // Sunset
    // weatherInfo.innerHTML += `<tr><th>Sunset:</th> <th>${sunset.toUTCString()}</th></tr>`;
  }).catch(err => {
    console.log(err);
  });
}

function gotData() {
  console.log("Hi again");
}

// Clouds, main.temp, main.humidity, rain.3h, weather.main, weather.description, name,