import React from "react";

import cityLatLong from "../data/city-data";

export default function CityAndTemp({ city, temperature }) {
  return (
    <div className="mx-auto w-[400px] text-center">
      <p className="text-lg mb-2">
        ქალაქი - <span className="font-bold">{cityLatLong[city].name}</span>
      </p>
      <p className="text-lg">
        ტემპერატურა - <span className="font-bold">{temperature}˚C</span>
      </p>
    </div>
  );
}
