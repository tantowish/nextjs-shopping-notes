'use client'

import { useState } from "react"

const Form = () => {
  const [name, setName] = useState('')

  function handleSubmit(){
    alert('item berhasil ditambah')
  }

  const quantityNum = [...Array(20)].map((_, i)=>(
    <option key={i+1} value={i+1}>{i+1}</option>
  ))
  return (
    <form className="items-center bg-zinc-300 p-2 md:p-4" onSubmit={handleSubmit}>
      <h3 className="text-sm md:text-base text-center mb-2">Hari ini belanja apa kita?</h3>
      <div className="flex flex-wrap gap-2 text-sm justify-center">
        <select className="rounded-full bg-orange-100 p-2" >{quantityNum}</select>
        <input 
        className="p-2 rounded-full bg-orange-100"
        type="text" 
        placeholder="nama barang..." />
        <button type="submit" className="bg-green-200 rounded-full p-2">Tambah</button>
      </div>
    </form>
  )
}

export default Form