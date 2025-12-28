async function fetchWeather() {
  const city = document.getElementById('cityInput').value.trim() || 'London';
  const result = document.getElementById('result');
  const error = document.getElementById('error');

  result.classList.add('hidden');
  error.classList.add('hidden');

  try {
    const res = await fetch(`/api/weather?city=${city}`);
    const data = await res.json();

    if (data.error) {
      error.textContent = data.error;
      error.classList.remove('hidden');
      return;
    }
    document.getElementById('city').textContent = data.city;
    document.getElementById('desc').textContent = data.description;
    document.getElementById('temp').textContent = data.temperature;
    document.getElementById('feels').textContent = data.feels_like;
    document.getElementById('wind').textContent = data.wind_speed;
    document.getElementById('rain').textContent = data.rain_volume_last_3h;
    document.getElementById('country').textContent = data.country_code;
    document.getElementById('aqi').textContent = data.air_quality_index;
    document.getElementById('aqiLevel').textContent = data.air_quality_level;
    document.getElementById('healthTip').textContent = data.health_tip;

    result.classList.remove('hidden');
  } catch (err) {
    error.textContent = 'Something went wrong';
    error.classList.remove('hidden');
  }
}
window.onload = fetchWeather;

