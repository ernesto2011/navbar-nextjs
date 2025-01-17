'use client'
import { useState } from "react";

export const CartCounter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <>
    <span className="text-7xl">{counter}</span>
    <div>
      <button
        onClick={() => setCounter(counter + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sumar
      </button>
      <button
        onClick={() => setCounter(counter - 1)}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Restar
      </button>
    </div>
    </>
  );
};
