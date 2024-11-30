import React from 'react'
import Navbar from '../components/global/Navbar'
import Footer from '../components/global/Footer'
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { useContext } from 'react';
import { useState } from 'react';
import { ProductContext } from '../App';
import { useNavigate } from 'react-router-dom';
const Productdetail = () => {
    const navigate = useNavigate();

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const productId = params.get("id");
    const products = useContext(ProductContext);
    const displayingProduct = products.filter((product) => {
        return product.id == productId ? product : ''
    })
    const addToCart = () => {
        const getData = localStorage.getItem("cartProducts");
        const newProduct = `{ "productId": ${productId}, "productQty": ${purchasingNumbers} }`;
        if (getData) {
            const fetchedDataArr = getData ? JSON.parse(getData) : [];
            let checkingExistingDataFlag = false;
            let updatedDataArr = fetchedDataArr.map((item) => {
                if (item.productId == productId) {
                    item.productQty += purchasingNumbers;
                    checkingExistingDataFlag = true;
                }
                return item;
            });
            if (checkingExistingDataFlag == false) {
                updatedDataArr.push(JSON.parse(newProduct));
            }
            localStorage.setItem("cartProducts", JSON.stringify(updatedDataArr));
            navigate("/cart");
        } else {
            localStorage.setItem("cartProducts", `[${newProduct}]`);
            navigate("/cart");
        }
    };
    const [purchasingNumbers, setPurchasingNumbers] = useState(1)
    return (
        <>
            <Navbar />
            <div className="content">
                <div className="container py-5">
                    <div style={{ width: "500px" }} className='m-auto bg-white product-detail-container'>
                        <div className="p-sm-5 p-3">
                            <img src={displayingProduct.length >= 1 ? displayingProduct[0].image : ''} alt="" className='w-100' style={{ height: "400px", objectFit: "cover" }} />
                            <p className='normal-text-color mt-3 mb-1'>Title : <span className='text-dark'>{displayingProduct.length >= 1 ? displayingProduct[0].title : ''}</span></p>
                            <p className='normal-text-color mb-1'>Description : <span className='text-dark'>{displayingProduct.length >= 1 ? displayingProduct[0].description : ''}</span></p>
                            <p className='normal-text-color'>Price : <span className='text-dark'>{displayingProduct.length >= 1 ? displayingProduct[0].price : ''}</span></p>
                            <div className='d-flex gap-3 flex-wrap'>
                                <div className='d-flex gap-2 align-items-center'>
                                    <button type='button' onClick={() => { purchasingNumbers > 2 ? setPurchasingNumbers(purchasingNumbers - 1) : setPurchasingNumbers(1) }} className='border-0 normal-bg-color text-white px-3 rounded-1 py-1'><FiMinus /></button>
                                    <span>{purchasingNumbers}</span>
                                    <button onClick={() => { setPurchasingNumbers(purchasingNumbers + 1) }} type='button' className='border-0 normal-bg-color text-white px-3 rounded-1 py-1'><FaPlus /></button>
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