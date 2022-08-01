import axios from "axios";

import cityLatLong from "../data/city-data";

async function fetchWeather({ city }) {
  try {
    const resp = await axios.get("https://api.open-meteo.com/v1/forecast", {
      params: {
        latitude: cityLatLong[city].lat,
        longitude: cityLatLong[city].long,
        current_weather: "true",
        // timezone: "Asia%2Tbilisi",
      },
    });

    // console.log(resp.data);

    const { temperature: local_temp } = resp.data.current_weather;
    return local_temp;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchWeather;
