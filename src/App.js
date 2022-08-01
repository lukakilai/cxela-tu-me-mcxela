import { useState, useEffect } from "react";

import { CityAndTemp, CityButton, Diagnosis } from "./components";

import cityLatLong from "./data/city-data";
import fetchWeather from "./utils/fetch-weather";

export default function App() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeather({ city }).then((local_temp) => setTemperature(local_temp));
    }
  }, [city]);

  return (
    <div className="w-full grid place-items-center h-screen">
      <div className="h-[280px] border flex flex-col justify-start items-center space-y-6">
        <div className="flex flex-col justify-start items-center space-y-6 border">
          <div className="mx-auto w-[400px] text-center">
            <p className="text-xl font-bold">სად იმყოფები ამჟამად?</p>
          </div>
          <ul className="mx-auto w-[400px] grid grid-cols-3 gap-4 px-6 py-2 border">
            {Object.keys(cityLatLong).map((cityName) => (
              <CityButton
                key={cityName}
                isActive={cityName === city}
                onClick={() => setCity(cityName)}
                label={cityLatLong[cityName].name}
              />
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-start items-center space-y-4 border">
          {city && temperature ? (
            <CityAndTemp {...{ city, temperature }} />
          ) : null}
          {temperature && <Diagnosis {...{ temperature }} />}
        </div>
      </div>
    </div>
  );
}
