import { groceryType } from "@/types/groceryType";
import Item from "./Item";
import { ChangeEvent, FormEvent, useState } from "react";

interface propsType {
  items: groceryType[],
  onDeleteItem : (id:number)=>void,
  onToggleItem: (id:number)=>void,
  onClearItems: ()=>void
} 

const Grocery = ({items, onDeleteItem, onToggleItem, onClearItems}:propsType) => {
  const [sortBy, setSortBy] = useState('input')

  const handleActions =(e: ChangeEvent<HTMLSelectElement>)=>{
    setSortBy(e.target.value)
  }

  let sortedItems

  if(sortBy === 'checked'){
    sortedItems = items.slice().sort((a,b)=>(a.checked ? 0 : 1) - (b.checked ? 0 : 1))
  }
  else if(sortBy === 'name'){
    sortedItems = items.slice().sort((a,b)=>a.name.localeCompare(b.name))
  }
  else{
    sortedItems = items
  }

  return (
    <>
    <div
    style={{ backgroundImage: `url('/paper-bg.jpg')` }} 
    className="flex flex-wrap justify-center py-8 md:py-12 h-[476px] overflow-scroll">
        <ul className="flex flex-col gap-8">
            {sortedItems.map(item=>(
              <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />
            ))}
        </ul>
    </div>
    <div className="p-2 text-base md:text-lg bg-zinc-300 flex justify-center">
        <select className="mr-4" value={sortBy} onChange={handleActions}>
            <option value="pick">pick</option>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button onClick={onClearItems} className="p-2 bg-red-500 rounded-full text-white">Bersihkan Daftar</button>
    </div>
    </>
  )
}

export default Grocery