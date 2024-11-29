import React from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const Productdetail = () => {
    const addToCart = () => { }
    return (
        <>
            <Navbar />
            <div className="content">
                <div className="container py-5">
                    <div style={{ width: "500px" }} className='m-auto bg-white'>
                        <div className="p-5">
                            <img src="" alt="" />
                            <p className='normal-text-color'>Title : <span className='text-dark'></span></p>
                            <p className='normal-text-color'>Description : <span className='text-dark'></span></p>
                            <p className='normal-text-color'>Price : <span className='text-dark'></span></p>
                            <div className='d-flex gap-3'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <button type='button' className='border-0 normal-bg-color text-white px-3 rounded-1 py-1'><FiMinus /></button>
                                    <span>1</span>
                                    <button type='button' className='border-0 normal-bg-color text-white px-3 rounded-1 py-1'><FaPlus /></button>
                                </div>
                                <button onClick={addToCart} className='px-3 rounded-1 bg-white' style={{ border: "1px solid #f67436" }}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Productdetail