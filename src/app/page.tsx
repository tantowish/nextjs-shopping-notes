'use client'

import { useState } from "react"
import Footer from "../components/Footer"
import Form from "../components/Form"
import Grocery from "../components/Grocery"
import Header from "../components/Header"
import { groceryType } from "@/types/groceryType"

const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

const Home = () => {
  const [items, setItems] = useState(groceryItems)

  function handleAddItem(item:groceryType){
    setItems([...items, item])
  }

  function handleDeleteItem(id:number){
    setItems((items)=>items.filter((item)=> item.id !== id))
  }

  function handleToggleItem(id:number){
    setItems((items)=>items.map((item)=>item.id === id ? {...item, checked: !item.checked}: item))
  }

  function handleClearItems(){
    setItems([])
  }

  return (
    <div className="max-w-xl mx-auto px-4">
      <Header />
      <Form onAddItem={handleAddItem}/>
      <Grocery 
      items={items} 
      onDeleteItem={handleDeleteItem} 
      onToggleItem={handleToggleItem}
      onClearItems={handleClearItems}
      />
      <Footer items={items} />
    </div>
  )
}

export default Home