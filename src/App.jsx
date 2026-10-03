import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

const API_KEY = import.meta.env.VITE_API_KEY;
  async function handleSearch() {
    try {
      setError("");
      setWeather(null);

      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h1>🌤️ Weather App</h1>

      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />

      <button onClick={handleSearch}>
        Search
      </button>

      {error && <p>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.location.name}</h2>

          <p>
            🌡️ Temperature: {weather.current.temp_c}°C
          </p>

          <p>
            ☁️ Condition: {weather.current.condition.text}
          </p>

          <p>
            💧 Humidity: {weather.current.humidity}%
          </p>

          <p>
            💨 Wind: {weather.current.wind_kph} km/h
          </p>
        </div>
      )}
    </>
  );
}

export default App;