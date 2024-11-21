import { Routes,Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import ProductContainer from "./components/ProductContainer"
import Cart from "./components/Cart"



function App() {
  

  return (
    <>  
        <NavBar />
        <Routes>
          <Route path="/" element ={<ProductContainer />} />
          <Route path="/cart" element ={<Cart/>} />
        </Routes>
        
    </>
  )
}

export default App
