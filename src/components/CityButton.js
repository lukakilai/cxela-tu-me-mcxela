import React from "react";

export default function CityButton({ onClick, cityName }) {
  return (
    <li
      className="px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white rounded-xl cursor-pointer text-center"
      onClick={onClick}
    >
      {cityName}
    </li>
  );
}
