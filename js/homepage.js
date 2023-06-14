function fetchWeatherData() {
    // Replace YOUR_API_KEY with your actual API key from weatherapi.com
    const apiKey = '9466314c5d5d4f288d182226231406';
    const searchInput = document.querySelector('.search-container');
    const city = document.querySelector('.city');
    const rainPercentage = document.querySelector('.rain-percentage');
    const temperature = document.querySelector('.temperature');
    const weatherIcon = document.querySelector('.weather-icon');

    // Fetch weather data
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchInput.value}`)
      .then(response => response.json())
      .then(data => {
        // Update the HTML elements with the weather data
        city.textContent = data.location.name;
        rainPercentage.textContent = `Chances Of Rain: ${data.current.precip_in}%`;
        temperature.textContent = `${data.current.temp_c}°`;

        // Assuming the weather icon is provided in the API response
        weatherIcon.src = data.current.condition.icon;
      })
      .catch(error => console.error('Error:', error));
  }

  // Add event listener to trigger fetchWeatherData() on search input change
//   document.querySelector('.search-container').addEventListener('change', fetchWeatherData);

