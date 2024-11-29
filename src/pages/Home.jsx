import React, { useEffect, useState } from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import Banner1 from "../assets/banner-a.jpg"
import Banner2 from "../assets/banner-b.jpg"
import Banner3 from "../assets/banner-c.jpg"
import Sliders from '../components/home/Sliders'
import Categories from '../components/home/Categories'
import Product from "../components/global/Product"
import { useContext } from 'react'
import { ProductContext } from '../App'
const Home = () => {
    const products = useContext(ProductContext)
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("categories.json").then((res) => res.json()).then((data) => setCategories(data))
    }, [])
    const popularProducts = products.filter((product) => {
        return product.rating >= 4
    })
    const latestProducts = products.slice(0, 7);
    const banners = [Banner1, Banner2, Banner3]
    return (
        <div>
            <Navbar />
            <div className="content">
                <div className="container px-5">
                    <Sliders imgs={banners} />
                    <div className="">
                        <div className='py-5 categories-lists row gx-1'>
                            {categories.map((category, key) => (
                                <div key={key} className='col-2'>
                                    <Categories data={category} />
                                </div>
                            ))}
                        </div>
                        <div className="popular-products">
                            <h4 className='normal-text-color fw-semibold mb-4'>Popular Products</h4>
                            <div className="row gx-3 gy-4">
                                {popularProducts.map((product, key) => (
                                    <div key={key} className='col-3'>
                                        <Product data={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="latest-products py-5">
                            <h4 className='normal-text-color fw-semibold mb-4'>Latest Products</h4>
                            <div className="row gx-3 gy-4">
                                {latestProducts.map((product, key) => (
                                    <div key={key} className='col-3'>
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

export default Home