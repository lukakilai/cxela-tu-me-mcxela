import React from "react";

export default function CityButton({ onClick, label, isActive }) {
  return (
    <li
      className={`generalButton ${
        isActive ? "activeButton" : "inactiveButton"
      }`}
      onClick={onClick}
    >
      {label}
    </li>
  );
}
