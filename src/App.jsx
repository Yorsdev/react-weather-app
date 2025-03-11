import { useState } from "react";
import { useWeather } from "./hooks";
import WeatherInfo from "./components/WeatherInfo";
import NotFound from "./components/NotFound";
import SearchForm from "./components/SearchForm";
import Forecast from "./components/Forecast";

function App() {
  const [city, setCity] = useState("");
  const { weather, forecast, notFound, searchWeatherByCity } = useWeather();
  const [showForecast, setShowForecast] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    searchWeatherByCity(city);
  };

  return (
    <div className={`w-full min-h-screen flex justify-center items-center transition-all duration-500 ${weather?.background || "bg-gradient-to-b from-[#02338a] to-[#ade8f4]"}`}>
      <div className="w-full max-w-sm bg-white/20 p-4 rounded-xl flex flex-col">
        <SearchForm city={city} setCity={setCity} handleSubmit={handleSubmit} />
        {notFound && <NotFound />}
        {!notFound && weather && (
          <>
          <WeatherInfo
            icon={weather.icon}
            description={weather.description}
            temperature={weather.temperature}
            humidity={weather.humidity}
            windSpeed={weather.windSpeed}
          />
          <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4 cursor-pointer"
              onClick={() => setShowForecast(!showForecast)}
              alt="Boton de pronostico semanal"
            >
              Pronóstico Semanal
            </button>
            {showForecast && <Forecast forecast={forecast} />}
          </>
        )}
      </div>
    </div>
  );
}

export default App;