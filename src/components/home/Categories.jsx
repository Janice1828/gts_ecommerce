import React from 'react'
import banner from "../../assets/banner-a.jpg"
const Categories = ({ data }) => {
    return (
        <div className='bg-white p-4'>
            <img src={data.img} alt="" style={{ height: "100px" }} />
            <p className='normal-text-color text-center mt-3 mb-0'>{data.categoryName}</p>
        </div>
    )
}

export default Categories