import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../components/global/Navbar';
import Footer from '../components/global/Footer';
import { ProductContext } from '../App';

const Checkout = () => {
    const products = useContext(ProductContext);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const fetchedData = localStorage.getItem("cartProducts");
        if (fetchedData) {
            const parsedData = JSON.parse(fetchedData); 
            const enrichedCartProducts = parsedData.map((item) => {
                const product = products.find((prod) => prod.id === item.productId);
                return product
                    ? {
                        ...product,
                        quantity: item.productQty,
                    }
                    : null;
            }).filter((item) => item !== null);
            setCartProducts(enrichedCartProducts);
        }
    }, [products]);

    const calculateTotal = () => {
        return cartProducts.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    };

    return (
        <>
            <Navbar />
            <div className="content">
                <div className="container py-5">
                    <h5 className="normal-text-color fw-semibold pb-4">Make Payments</h5>
                    <div className="row">
                        <div className="col-md-8">
                            {cartProducts.map((product, index) => (
                                <div key={product.id} className="bg-white p-4 mb-3">
                                    <div className="d-flex justify-content-between flex-wrap">
                                        <div>
                                            <img
                                                src={product.image}
                                                alt={product.title} className='object-fit-cover mb-2'
                                                style={{ height: '100px', width: "100px" }}
                                            />
                                            <p className="fw-semibold">{product.title}</p>
                                        </div>
                                        <div>
                                            <p>
                                                <span className="normal-text-color">Price:</span> Nrs.{product.price}
                                            </p>
                                            <div className="d-flex gap-3 align-items-center">
                                                <span className="normal-text-color">Quantity:</span>
                                                <div className="d-flex gap-2 align-items-center">
                                                    <span>{product.quantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-md-4 pt-md-0 pt-4">
                            <div className="bg-white">
                                <div className="p-4">
                                    <h5 className="normal-text-color fw-semibold">Order Summary</h5>
                                    <p className="mb-1">
                                        <span className="normal-text-color">Items Total:</span> Nrs.{calculateTotal()}
                                    </p>
                                    <p className="mb-1">
                                        <span className="normal-text-color">Delivery Fee:</span> Nrs.100
                                    </p>
                                    <p>
                                        <span className="normal-text-color">Total:</span> Nrs.{calculateTotal() + 100}
                                    </p>
                                    <button className="normal-bg-color border-0 text-white px-3 py-1 rounded-2">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;
