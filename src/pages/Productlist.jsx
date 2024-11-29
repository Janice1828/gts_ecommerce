import React, { useContext, useState } from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Filters from '../components/productlists/Filters'
import Product from '../components/global/Product'
import { useEffect } from 'react'
import { ProductContext } from '../App'
const Productlist = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const category = params.get("category");
  const [displayingCategory, setDisplayingCategory] = useState([])
  const products = useContext(ProductContext)
  useEffect(() => {
    let newData = products.filter((product) => {
      return product.category == category ? product : ''
    })
    setDisplayingCategory(newData)
  }, [products])
  const currentCategoriesProducts = products.filter((product) => {
    return product.category == category ? product : '';
  })
  const colors = [];
  const brand = [];
  currentCategoriesProducts.forEach((product) => {
    colors.push(product.color);
    brand.push(product.brand)
  })
  const uniqueColors = new Set(colors);
  const uniqueBrands = new Set([...brand])
  const uniqueColorsArr = [...uniqueColors]
  const uniqueBrandsArr = [...uniqueBrands]
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-3 pb-md-0 pb-4">
              <Filters colors={uniqueColorsArr} brands={uniqueBrandsArr} filteredProducts={currentCategoriesProducts} updateProducts={setDisplayingCategory} />
            </div>
            <div className="col-md-9">
              <div className='row w-100 gy-4'>
                {displayingCategory.map((product, key) => (
                  <div key={key} className='col-xl-3 col-lg-4 col-sm-6'>
                    <Product data={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Productlist