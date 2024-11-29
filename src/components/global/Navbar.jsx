import React from 'react'
import NavLogo from "../../assets/nav-logo.png"
import { FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='bg-white position-sticky top-0' style={{ zIndex: "1000" }}>
            <div className='container'>
                <div className="py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <Link to="/">
                            <img src={NavLogo} id='nav-logo' alt="" />
                        </Link>
                        <Link to="/cart">
                            <FaCartShopping className='normal-text-color fs-2' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar