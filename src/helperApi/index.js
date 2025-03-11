export const getWeather = async (city) => {
  const appid = 'a882558f4c146f78013e50127b349fcd';
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=es&units=metric&appid=${appid}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

export const getWeeklyForecast = async (city) => {
  const appid = 'a882558f4c146f78013e50127b349fcd';
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=es&units=metric&appid=${appid}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};