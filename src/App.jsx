
import './style/global.css'
function App() {


  return (
    <>
    <h1 className="ml-15 text-black-600 text-xl">Hello World</h1>
  
    <button
     className=' 
     ml-2 py-2 px-7
     bg-blue-300
     text-black-600 rounded-sm
     hover:bg-blue-400 cursor-pointer
     hover:rounded-xl 
    '>
      BTN Add
    </button>

    <button
     className=' 
     ml-2 py-2 px-7
     bg-red-500
     text-black-600 rounded-sm
     hover:bg-red-600 cursor-pointer
     hover:rounded-xl 
    '>
      BTN Cancel
    </button>

    <button
     className=' 
     ml-2 py-3 px-7
     bg-gray-400
     text-black-600 rounded-sm
     hover:bg-gray-400 cursor-pointer
     hover:rounded-xl 
    '>
      BTN Show
    </button>    
      
    </>
  )
}

export default App


// cor de texto e peso - text-color-weight
// padding - p-rem
// margin - m-rem
// background-color - bg-color-intensity
// border-radius - rounded-size