import React from "react";

export default function CityButton({ onClick, label, isActive }) {
  return (
    <li
      className={`px-4 py-2 ${
        isActive
          ? "bg-white text-blue-700 shadow-lg border border-blue-700"
          : "bg-blue-700 hover:bg-blue-600 text-white"
      } rounded-xl cursor-pointer text-center`}
      onClick={onClick}
    >
      {label}
    </li>
  );
}
