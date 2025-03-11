import { useState } from "react";
import { getWeather, getWeeklyForecast } from "../helperApi";

export const useWeather = () => {

  const weatherBackgrounds = {
    Clear: "bg-gradient-to-b from-yellow-500 to-orange-400", 
    Clouds: "bg-gradient-to-b from-gray-500 to-gray-300", 
    Rain: "bg-gradient-to-b from-blue-700 to-blue-400", 
    Snow: "bg-gradient-to-b from-gray-300 to-white",
    Thunderstorm: "bg-gradient-to-b from-purple-800 to-gray-600", 
    Drizzle: "bg-gradient-to-b from-blue-500 to-blue-200",
    Mist: "bg-gradient-to-b from-gray-400 to-gray-200",
    Default: "bg-gradient-to-b from-[#02338a] to-[#ade8f4]",
  };

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const searchWeatherByCity = async (city) => {
    const data = await getWeather(city);
    if (data.cod === "404") {
      setNotFound(true);
      setWeather(null);
      setForecast([]);
      return;
    }
    setNotFound(false);
    setWeather({
      icon: data.weather[0].icon,
      description: data.weather[0].description,
      temperature: Math.round(data.main.temp),
      humidity: `${data.main.humidity}%`,
      windSpeed: `${Math.round(data.wind.speed)}m/s`,
      background: weatherBackgrounds[data.weather[0].main] || weatherBackgrounds.Default,
    });

    
    const forecastData = await getWeeklyForecast(city);
    if (forecastData.cod === "200") {
      const dailyForecast = forecastData.list.filter((item, index) => index % 8 === 0);
      setForecast(dailyForecast);
    }
  };

  return {
    weather,
    forecast,
    notFound,
    searchWeatherByCity,
  };
};