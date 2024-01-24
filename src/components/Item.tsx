import { groceryType } from "@/types/groceryType"
import { FormEvent, useState } from "react"

interface propsType {
  item: groceryType,
  onDeleteItem : (id:number)=>void,
  onToggleItem: (id:number)=>void
} 

const Item = ({ item, onDeleteItem, onToggleItem }: propsType) => {
  return (
    <li className="flex flex-wrap gap-4 items-center" key={item.id}>
        <input
        className="h-5 w-5" 
        type="checkbox" 
        checked ={item.checked ? true : false}
        onChange={()=>onToggleItem(item.id)}
        />
        <span className={`text-lg md:text-xl font-semibold ${item.checked ? 'line-through opacity-60': ''}`}>{item.quantity} {item.name}</span>
        <button onClick={()=>onDeleteItem(item.id)} className="text-lg md:text-xl bg-red-600 text-white px-2 rounded-full">&times;</button>
    </li>
  )
}

export default Item