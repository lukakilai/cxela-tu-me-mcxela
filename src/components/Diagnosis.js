import React from "react";

export default function Diagnosis({ temperature }) {
  const result = temperature >= 26 ? "ცხელა" : "შენ გცხელა";
  return (
    <div className="mx-auto w-full text-center">
      <p className="text-xl">
        დიაგნოზი - <span className="font-bold">{result}</span>
      </p>
    </div>
  );
}
