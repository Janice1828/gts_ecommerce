import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, data } from 'react-router-dom'
import Home from './pages/Home'
import Productlist from './pages/Productlist'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { Routes, Route } from 'react-router-dom'
import { createContext } from 'react'
import Productdetail from './pages/Productdetail'
const ProductContext = createContext()
function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json").then((res) => res.json()).then((data) => setProducts(data.data))
  }, [])
  return (
    <>
      <ProductContext.Provider value={products}>
        <BrowserRouter>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/productscategory" Component={Productlist} />
            <Route path="/cart" Component={Cart} />
            <Route path="/checkout" Component={Checkout} />
            <Route path="/productdetail" Component={Productdetail} />
          </Routes>
        </BrowserRouter>
      </ProductContext.Provider>
    </>
  )
}
export default App
export { ProductContext }