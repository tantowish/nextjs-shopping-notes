import { groceryType } from "@/types/groceryType"


const Footer = ({items}:{items:groceryType[]}) => {
  if(items.length === 0) return <footer className="p-2 text-lg md:text-xl text-center bg-emerald-700 text-white">Daftar belanjaan masih kosong</footer>
  const totalItems = items.length
  const checkedItems = items.filter((item)=>item.checked).length
  const percentage = Math.round((checkedItems/totalItems)*100)
  return (
    <footer className="p-2 text-lg md:text-xl text-center bg-emerald-700 text-white">Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentage})</footer>
  )
}

export default Footer