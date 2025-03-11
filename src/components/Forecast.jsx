function Forecast({ forecast }) {
  return (
    <div className="mt-4">
      <h3 className="text-center font-bold text-lg text-white mb-2">Próximos Días</h3>
      <div className="flex flex-col gap-2">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white/10 p-2 rounded-lg"
          >
            <span className="text-white font-medium">
              {new Date(day.dt_txt).toLocaleDateString("es-ES", { weekday: "long" })}
            </span>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt={day.weather[0].description}
              className="w-10"
            />
            <span className="text-white font-medium">{Math.round(day.main.temp)}°C</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
