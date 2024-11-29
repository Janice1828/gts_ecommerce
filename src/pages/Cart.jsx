import React from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import { Link } from 'react-router-dom'
const Cart = () => {
    return (
        <>
            <Navbar />
            <div className="content">
                <div className="py-5">
                    <div className="container">
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th className=' normal-text-color' style={{ background: "#f5f5f5" }}>S.N.</th>
                                        <th className=' normal-text-color' style={{ background: "#f5f5f5" }}>Title</th>
                                        <th className=' normal-text-color' style={{ background: "#f5f5f5" }}>Price Per Qty</th>
                                        <th className=' normal-text-color' style={{ background: "#f5f5f5" }}>Qty</th>
                                        <th className=' normal-text-color' style={{ background: "#f5f5f5" }}> Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Shoes</td>
                                        <td>2000</td>
                                        <td>10</td>
                                        <td className='text-danger'>Delete</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link to="/checkout" className='normal-bg-color text-decoration-none text-white border-0 px-3 py-1 rounded-1 mt-4'>Proceed To Checkout</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart