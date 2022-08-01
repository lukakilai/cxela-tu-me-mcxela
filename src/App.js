import { useState, useEffect } from "react";
import axios from "axios";
import CityButton from "./components/CityButton";

import cityLatLong from "./data/city-data";

export default function App() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    async function getWeather() {
      try {
        const resp = await axios.get("https://api.open-meteo.com/v1/forecast", {
          params: {
            latitude: cityLatLong[city].lat,
            longitude: cityLatLong[city].long,
            current_weather: "true",
            // timezone: "Asia%2Tbilisi",
          },
        });

        console.log(resp.data);
        const { temperature: local_temp } = resp.data.current_weather;
        setTemperature(local_temp);
      } catch (error) {
        console.log(error.message);
      }
    }

    if (city) getWeather();
  }, [city]);

  return (
    <div className="w-full">
      <ul className="mx-auto w-[400px] grid grid-cols-3 gap-4 px-6 py-2 my-10 border">
        {Object.keys(cityLatLong).map((cityName) => (
          <CityButton
            key={cityName}
            onClick={() => setCity(cityName)}
            cityName={cityLatLong[cityName].name}
          />
        ))}
      </ul>

      {temperature ? (
        <div className="mx-auto w-[400px] text-center">
          <p className="text-lg font-bold">{temperature}˚C</p>
        </div>
      ) : null}
      {temperature && (
        <div className="mx-auto w-[400px] text-center">
          {temperature >= 26 ? (
            <p className="text-lg">
              დიაგნოზი - <span className="font-bold">ცხელა</span>
            </p>
          ) : (
            <p className="text-lg">
              დიაგნოზი - <span className="font-bold">შენ გცხელა</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
