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

const Grocery = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center py-8 md:py-12">
        <ul className="flex flex-col gap-8">
            {groceryItems.map(grocery=>(
            <li className="flex flex-wrap gap-4 items-center" key={grocery.id}>
                <input
                className="h-5 w-5" 
                type="checkbox" 
                checked ={grocery.checked ? true : false}
                />
                <span className={`text-lg md:text-xl font-semibold ${grocery.checked ? 'line-through': ''}`}>{grocery.quantity} {grocery.name}</span>
                <button className="text-lg md:text-xl bg-red-600 text-white px-2 rounded-full">&times;</button>
            </li>
            ))}
        </ul>
    </div>
    <div className="p-2 text-base md:text-lg bg-zinc-300">
        <select className="mr-4">
            <option value="pick">pick</option>
            <option value="input">Urutkan berdasarkan urutan input</option>
            <option value="name">Urutkan berdasarkan nama barang</option>
            <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button className="p-2 bg-red-500 rounded-full text-white">Bersihkan Daftar</button>
    </div>
    </>
  )
}

export default Grocery