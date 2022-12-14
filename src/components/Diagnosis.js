import React from "react";

export default function Diagnosis({ temperature }) {
  const result = temperature >= 26 ? "ცხელა" : "შენ გცხელა";
  return (
    <div className="mx-auto w-full text-center">
      <p className="text-3xl">
        <span className="font-archy-thin font-bold">დიაგნოზი - </span>
        <span className="font-archy-bold">{result}</span>
      </p>
    </div>
  );
}
