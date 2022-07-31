import { useState } from "react";
import axios from "axios";

const cityLatLong = {
  tbilisi: {
    lat: 41.720241,
    long: 44.776341,
  },
  batumi: {
    lat: 41.646044,
    long: 41.624849,
  },
  kutaisi: {
    lat: 42.270565,
    long: 42.702811,
  },
  telavi: {
    lat: 41.920893,
    long: 45.470936,
  },
};

export default function App() {
  const [temperature, setTemperature] = useState(null);

  async function getWeather(city) {
    const resp = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: cityLatLong[city].lat,
        longitude: cityLatLong[city].long,
        current_weather: "true",
        // timezone: "Asia%2Tbilisi",
      },
    });

    const { temperature: local_temp } = resp.data.current_weather;
    setTemperature(local_temp);
  }

  return (
    <div className="w-full border">
      {Object.keys(cityLatLong).map((city) => (
        <button
          key={city}
          className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-xl my-6"
          onClick={() => getWeather(city)}
        >
          {city}
        </button>
      ))}
      {temperature ? <p>{temperature} *C</p> : null}
    </div>
  );
}
