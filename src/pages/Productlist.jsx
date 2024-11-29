import React, { useContext } from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Filters from '../components/productlists/Filters'
import Product from '../components/global/Product'
import { ProductContext } from '../App'
const Productlist = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const category = params.get("category");
  const products = useContext(ProductContext)
  const displayingCategory = products.filter((product) => {
    return product.category == category ? product : ''
  })
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-3 pb-md-0 pb-4"><Filters /></div>
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