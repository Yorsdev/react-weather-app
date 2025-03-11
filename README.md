🌦️ Weather App - React

![image](https://github.com/user-attachments/assets/1c255d13-3411-4997-9a03-3ef6f7587a1a)

Este es un proyecto de aplicación del clima desarrollado en React que se conecta a la API de OpenWeather para mostrar la información climática de cualquier ciudad. Además, incluye un pronóstico semanal y un fondo dinámico que cambia según el estado del clima.

🚀 Características

🔍 Búsqueda de clima por nombre de ciudad.

🌡️ Muestra temperatura, humedad y velocidad del viento.

📅 Pronóstico semanal.

🎨 Fondo dinámico basado en el clima actual.

🎯 Diseño responsive (Mobile First).

🛠️ Tecnologías Utilizadas

⚛ React (Componentes funcionales y hooks)

🌬 Tailwind CSS (Estilos y diseño responsive)

☁ OpenWeather API (Datos del clima en tiempo real)

📦 Instalación

Clona el repositorio:

git clone https://github.com/tu-usuario/weather-app.git

Ingresa al directorio del proyecto:

cd weather-app

Instala las dependencias:

npm install

Crea un archivo .env en la raíz del proyecto y agrega tu API Key de OpenWeather:

REACT_APP_WEATHER_API_KEY=tu_api_key

Ejecuta la aplicación en modo desarrollo:

npm run dev

Abre tu navegador y ve a http://localhost:5173/ (o el puerto que indique Vite).

📁 Estructura del Proyecto

weather-app/
│── public/
│── src/
│   ├── components/
│   │   ├── SearchForm.jsx
│   │   ├── WeatherInfo.jsx
│   │   ├── NotFound.jsx
│   │   ├── WeeklyForecast.jsx
│   ├── hooks/
│   │   ├── useWeather.js
│   ├── helperApi/
│   │   ├── index.js
│   ├── App.jsx
│   ├── main.jsx
│── .env
│── package.json
│── README.md

🔗 API utilizada

Este proyecto obtiene los datos del clima desde OpenWeather API.
Puedes obtener tu clave de API gratuita aquí: https://openweathermap.org/api

Ejemplo de solicitud a la API:

https://api.openweathermap.org/data/2.5/weather?q=Bogota&units=metric&appid=TU_API_KEY

📌 Próximas Mejoras

✅ Mejorar la UI con animaciones y transiciones suaves.
✅ Agregar predicción de clima por ubicación automática (Geolocalización).
✅ Mejor manejo de errores en la API.

📜 Licencia

Este proyecto está bajo la MIT License - Puedes usarlo libremente.

💻 Autor

Tu Nombre

GitHub: @tu-usuario

LinkedIn: Tu Perfil

¡Disfruta tu aplicación del clima! ☀️🌧️❄️
