'use client'
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, substractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";
interface Props{
    value: number;
}
export interface CounterResponse {
  method: string;
  count: number;
}
const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch("/api/counter").then((res) => res.json());
    return data;
  };
export const CartCounter = ({value}:Props) => {
    //const [counter, setCounter] = useState(value)
    const count = useAppSelector(state => state.counter.count)
    const dispatch = useAppDispatch();
    // useEffect(()=>{
    //   dispatch(initCounterState(value))
    // },[])
    useEffect(()=>{
        getApiCounter().then(({count})=>{
            dispatch(initCounterState(count))
        })
    },[dispatch])
  return (
    <>
    <span className="text-7xl">{count}</span>
    <div>
      <button
        onClick={() => dispatch(addOne())}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Sumar
      </button>
      <button
        onClick={() => dispatch(substractOne())}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Restar
      </button>
    </div>
    </>
  );
};
