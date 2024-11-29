import React from 'react'

const Filters = () => {
    return (
        <div className='bg-white p-4'>
            <h5 className='fw-semibold normal-text-color'>Filters</h5>
            <p className='normal-text-color fw-semibold'>Brands</p>
            <div className='d-flex gap-1 align-items-center'><input type="checkbox" /><label htmlFor="">Samsung</label></div>
        </div>
    )
}

export default Filters