const express = require('express');
const router = express.Router();
const { getWeather } = require('../services/weatherService');
const { getAirQuality } = require('../services/healthService');

router.get('/weather', async (req, res) => {
  const city = req.query.city || 'London';

  try {
    const weatherData = await getWeather(city);
    const { lat, lon } = weatherData.coord;
    const airData = await getAirQuality(lat, lon);
    const aqi = airData.list[0].main.aqi;
    const aqiText = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'][aqi - 1];

    res.json({
      city: weatherData.name,
      temperature: Math.round(weatherData.main.temp),
      description: weatherData.weather[0].description,
      feels_like: Math.round(weatherData.main.feels_like),
      wind_speed: weatherData.wind.speed,
      rain_volume_last_3h: weatherData.rain?.['3h'] || 0,
      country_code: weatherData.sys.country,
      coordinates: { lat: lat.toFixed(2), lon: lon.toFixed(2) },

      air_quality_index: aqi,
      air_quality_level: aqiText,
      health_tip: aqi <= 2 ? "Good air! Enjoy outside!" 
                 : aqi === 3 ? "Okay, but sensitive people be careful" 
                 : "Poor air quality – stay indoors if possible"
    });

  } catch (error) {
    res.status(400).json({ error: 'City not found or server error' });
  }
});

module.exports = router;
