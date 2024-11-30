import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import { Link } from 'react-router-dom';
import { ProductContext } from '../App';

const Cart = () => {
    const products = useContext(ProductContext);
    const [listingProducts, setListingProducts] = useState([]);

    useEffect(() => {
        const fetchedData = localStorage.getItem("cartProducts");
        if (fetchedData) {
            const addedData = JSON.parse(fetchedData); 

            const listedProducts = products
                .filter((product) => addedData.some((item) => item.productId === product.id))
                .map((product) => {
                    const item = addedData.find((item) => item.productId === product.id);
                    return {
                        ...product,
                        quantity: item.productQty,
                    };
                });

            setListingProducts(listedProducts);
        }
    }, [products]); 

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
                                        <th className='normal-text-color' style={{ background: "#f5f5f5" }}>S.N.</th>
                                        <th className='normal-text-color' style={{ background: "#f5f5f5" }}>Title</th>
                                        <th className='normal-text-color' style={{ background: "#f5f5f5" }}>Price Per Qty</th>
                                        <th className='normal-text-color' style={{ background: "#f5f5f5" }}>Qty</th>
                                        <th className='normal-text-color' style={{ background: "#f5f5f5" }}>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listingProducts.map((product, index) => (
                                        <tr key={product.id}>
                                            <td>{index + 1}</td>
                                            <td>{product.title}</td>
                                            <td>{product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td
                                                className='text-danger'
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                Delete
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="d-flex justify-content-center">
                            <Link
                                to="/checkout"
                                className='normal-bg-color text-decoration-none text-white border-0 px-3 py-1 rounded-1 mt-4'
                            >
                                Proceed To Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
    function handleDelete(productId) {
        const fetchedData = localStorage.getItem("cartProducts");
        if (fetchedData) {
            const addedData = JSON.parse(fetchedData).filter((item) => item.productId !== productId);
            localStorage.setItem("cartProducts", JSON.stringify(addedData));
            setListingProducts((prev) => prev.filter((product) => product.id !== productId));
        }
    }
};

export default Cart;
