import { useState, useEffect } from "react";

import {
  CityAndTemp,
  CityButton,
  Diagnosis,
  KhashuriDiagnosis,
} from "./components";

import cityLatLong from "./data/city-data";
import fetchWeather from "./utils/fetch-weather";
import cityIsSet from "./utils/city-set";

export default function App() {
  const [city, setCity] = useState(null);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    if (city) {
      fetchWeather({ city }).then((local_temp) => setTemperature(local_temp));
    }
  }, [city]);

  return (
    <div className="w-full grid place-items-center h-screen background-gradient p-6">
      <div className="w-full sm:w-[400px] flex flex-col justify-start items-center space-y-6 bg-slate-50 rounded-md p-4">
        <div className="flex flex-col justify-start items-center space-y-6 py-4 bg-slate-200 rounded-md w-full">
          <div className="mx-auto text-center">
            <p className="text-3xl font-bold font-archy-bold">
              სად იმყოფები ამჟამად?
            </p>
          </div>
          <ul className="mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 px-6">
            {Object.keys(cityLatLong).map((cityName) => (
              <CityButton
                key={cityName}
                isActive={cityName === city}
                onClick={() => setCity(cityName)}
                label={cityLatLong[cityName].btnLabel}
              />
            ))}
          </ul>
        </div>

        {cityIsSet({ city, temperature }) && (
          <CityAndTemp {...{ city, temperature }} />
        )}
        {city !== "khashuri" && temperature && (
          <Diagnosis {...{ temperature }} />
        )}
        {city === "khashuri" && <KhashuriDiagnosis />}
      </div>
    </div>
  );
}
