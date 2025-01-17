'use client'
import { useState } from "react";
interface Props{
    value: number;
}
export const CartCounter = ({value}:Props) => {
    const [counter, setCounter] = useState(value)
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
