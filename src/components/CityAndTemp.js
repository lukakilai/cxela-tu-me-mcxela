import React from "react";

import cityLatLong from "../data/city-data";

export default function CityAndTemp({ city, temperature }) {
  return (
    <div className="flex flex-col justify-start items-center space-y-4 py-4">
      <div className="mx-auto w-full text-center">
        <p className="text-lg mb-2">
          ქალაქი - <span className="font-bold">{cityLatLong[city].name}</span>
        </p>
        <p className="text-lg">
          ტემპერატურა - <span className="font-bold">{temperature}˚C</span>
        </p>
      </div>
    </div>
  );
}
