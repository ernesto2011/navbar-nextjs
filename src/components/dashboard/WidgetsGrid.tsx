'use client'
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {
    const count = useAppSelector(state => state.counter.count)

    const dataCard = {
        title: count.toString(),
        subtitle:"Productos agregados",
        label: 'Contador',
        icon: <IoCartOutline size={50} className="text-blue-500"/>,
        href: '/dashboard/counter'
    } 
  return (
    <div className='flex flex-wrap items-center justify-center p-2'>
        <SimpleWidget {...dataCard} />
    </div>
  )
}
