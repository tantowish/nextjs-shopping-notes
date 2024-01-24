'use client'

import { groceryType } from "@/types/groceryType";
import { ChangeEvent, FormEvent, useState } from "react"

interface FormProps {
  onAddItem: (item: groceryType) => void;
}

const Form = ({onAddItem}:FormProps) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault()

    if(!name.trim()) return
    const newItem = {
      name, quantity, checked: false, id: Date.now()
    }

    onAddItem(newItem)

    setName('')
    setQuantity(1)
  }

  const handleNameChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setName(e.target.value)
  }

  const handleQuantity = (e:ChangeEvent<HTMLSelectElement>)=>{
    setQuantity(parseInt(e.target.value))
  }

  const quantityNum = [...Array(20)].map((_, i)=>(
    <option key={i+1} value={i+1}>{i+1}</option>
  ))
  
  return (
    <form className="items-center bg-zinc-300 p-2 md:p-4" onSubmit={handleSubmit}>
      <h3 className="text-sm md:text-base text-center mb-2">Hari ini belanja apa kita?</h3>
      <div className="flex flex-wrap gap-2 text-sm justify-center">
        <select 
        className="rounded-full bg-orange-100 p-2" 
        value={quantity}
        onChange={handleQuantity}
        >
          {quantityNum}</select>
        <input 
        className="p-2 rounded-full bg-orange-100"
        type="text" 
        placeholder="nama barang..." 
        value={name}
        onChange={handleNameChange}
        />
        <button type="submit" className="bg-green-200 rounded-full p-2">Tambah</button>
      </div>
    </form>
  )
}

export default Form