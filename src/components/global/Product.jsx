import React from 'react'
const Product = ({ data }) => {
    return (
        <div className='bg-white w-100'>
            <img src={data.image} alt="" className='w-100 object-fit-cover' style={{ height: "200px" }} />
            <div className="p-2">
                <hr />
                <p className='fw-bold normal-text-color mb-1'>{data.title}</p>
                <p className='normal-text-color mb-1'>Nrs. {data.discountedPrice}</p>
                <p style={{ fontSize: "14px", textDecoration: "line-through" }}>Nrs. {data.price}</p>
            </div>
        </div >
    )
}

export default Product