import React from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Filters from '../components/productlists/Filters'
import Product from '../components/global/Product'

const Productlist = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="container">
          <div className="row py-5">
            <div className="col-3"><Filters /></div>
            <div className="col-1"></div>
            <div className="col-8">
              <div className='row'>
                <div className="col-3">
                  {/* <Product /> */}
                </div>
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