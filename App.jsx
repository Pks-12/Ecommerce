import Cart from "./Components/Cart/Cart"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Homes"
import { Routes,Route } from "react-router-dom"
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]); 
  return(
    <>
    <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
      <Route path="/navbar" element={<Navbar/>}></Route>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      {/* i have to add routes here shops,contact,all categories, social media, and customer support */}
    </Routes>
    </>
  )
}

export default App
