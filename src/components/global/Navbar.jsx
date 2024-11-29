import React from 'react'
import NavLogo from "../../assets/nav-logo.png"
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='container'>
                <div className="py-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src={NavLogo} id='nav-logo' alt="" />
                        <FaCartShopping className='normal-text-color fs-2' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar