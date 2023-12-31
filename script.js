//your JS code here. If required.
const weatherBtn = document.getElementById('weatherBtn');
const weatherDataDiv = document.getElementById('weatherData');

weatherBtn.addEventListener('click', getCurrentWeather);

function getCurrentWeather() {
  const apiKey = '66838e9b1d5807f82bdba67eea721ae7'; // Replace with your OpenWeatherMap API key
  const city = 'London';

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].main;
      const weatherData = `Current weather in ${city}: ${weather}`;
      weatherDataDiv.textContent = weatherData;
    })
    .catch(error => {
      console.log('Error:', error);
      weatherDataDiv.textContent = 'Failed to fetch weather data';
    });
}
