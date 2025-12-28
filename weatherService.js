const axios = require('axios');
const API_KEY = process.env.OPENWEATHER_API_KEY;

const getWeather = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const response = await axios.get(url);
  return response.data;
};

module.exports = { getWeather };
