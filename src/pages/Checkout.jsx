import React from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
const Checkout = () => {
    return (
        <>
            <Navbar />
            <div className="content">
                <div className="container py-5">
                    <h5 className='normal-text-color fw-semibold pb-4'>Make Payments</h5>
                    <div className="row">
                        <div className="col-8">
                            <div className='bg-white p-4'>
                                <div className='d-flex justify-content-between'>
                                    <div>
                                        <img src="" alt="" />
                                        <p className='fw-semibold'>Goldstar Shoe</p>
                                    </div>
                                    <div>
                                        <p><span className='normal-text-color'>Price:</span> Nrs.2000</p>
                                        <div className='d-flex gap-3 align-items-center'>
                                            <span className='normal-text-color'>Quantity:</span> <div className='d-flex gap-2 align-items-center'>
                                                <button className='bg-white px-3' style={{ border: "1px solid #f67436" }}><FiMinus /></button>
                                                <span>1</span>
                                                <button className='bg-white px-3' style={{ border: "1px solid #f67436" }}><FaPlus /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-white">
                                <div className="p-4">
                                    <h5 className='normal-text-color fw-semibold'>Order Summary</h5>
                                    <p className='mb-1'><span className="normal-text-color">Items Total:</span> 2000</p>
                                    <p className='mb-1'><span className="normal-text-color">Delivery Fee:</span> 100</p>
                                    <p><span className="normal-text-color">Total:</span> 2100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout