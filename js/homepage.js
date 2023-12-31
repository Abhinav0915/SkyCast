function fetchWeatherData() {
    const apiKey = '9466314c5d5d4f288d182226231406';
    const searchInput = document.querySelector('.search-container');
    const city = document.querySelector('.city');
    const rainPercentage = document.querySelector('.rain-percentage');
    const temperature = document.querySelector('.temperature');
    const weatherIcon = document.querySelector('.weather-icon');
    

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput.value}`)
      .then(response => response.json())
      .then(data => {
        city.textContent = data.location.name;
        rainPercentage.textContent = `Chances Of Rain: ${data.current.precip_in}%`;
        temperature.textContent = `${data.current.temp_c}°`;
        weatherIcon.src = data.current.condition.icon;
      })
      .catch(error => console.error('Error:', error));

      if (searchInput.value == "") {
        alert("Please enter a city");
      }
      if (data.location.name == "") {
        alert("Please enter a valid city");
      }
   }

   if (weatherData.weatherIcon) {
    document.querySelector('.weather-icon img').src = weatherData.weatherIcon;
  } else {
    document.querySelector('.weather-icon img').style.visibility = 'hidden';
}