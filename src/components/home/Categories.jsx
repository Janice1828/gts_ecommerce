import React from 'react'
import banner from "../../assets/banner-a.jpg"
import { Link } from 'react-router-dom'
const Categories = ({ data }) => {
    return (
        <Link to={`/productscategory?category=${data.categoryName}`} className='text-decoration-none'>
            <div className='bg-white p-4'>
                <img src={data.img} alt="" className='w-100' style={{ height: "100px" }} />
                <p className='normal-text-color text-center mt-3 mb-0'>{data.categoryName}</p>
            </div>
        </Link>
    )
}
export default Categories