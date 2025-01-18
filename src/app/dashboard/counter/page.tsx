import { CartCounter } from "@/components";
export const metadata={
    title:"Carrito de compras",
    description:"Carrito de compras"
}

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
        <span>Productos en el carrito</span>
        <CartCounter value={20}/>
        
    </div>
  )
}
