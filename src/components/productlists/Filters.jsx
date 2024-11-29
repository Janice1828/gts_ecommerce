import React, { useContext, useState, useEffect } from 'react'
const Filters = ({ colors, brands, filteredProducts, updateProducts }) => {
    const [selectedBrands, setSelectedBrands] = useState([])
    const [selectedColors, setSelectedColors] = useState([])
    const [filteredResults, setFilteredResults] = useState(filteredProducts);
    const handleBrandFilter = (event) => {
        if (event.target.checked) {
            setSelectedBrands([...selectedBrands, event.target.value]);
        } else {
            setSelectedBrands(
                selectedBrands.filter((brand) => brand !== event.target.value)
            );
        }
    };
    const handleColorFilter = (event) => {
        if (event.target.checked) {
            setSelectedColors([...selectedColors, event.target.value]);
        } else {
            setSelectedColors(
                selectedColors.filter((color) => color !== event.target.value)
            );
        }
    };
    useEffect(() => {
        let filterData = filteredProducts;
        if (selectedBrands.length > 0) {
            filterData = filterData.filter((item) =>
                selectedBrands.includes(item.brand)
            );
        }
        if (selectedColors.length > 0) {
            filterData = filterData.filter((item) =>
                selectedColors.includes(item.color)
            );
        }
        updateProducts(filterData)
    }, [selectedBrands, selectedColors, filteredProducts]);

    return (
        <div className='bg-white p-4'>
            <h5 className='fw-semibold normal-text-color'>Filters</h5>
            <p className='normal-text-color fw-semibold'>Brands</p>
            <div className='d-flex flex-wrap gap-3'>
                {brands.map((brand, key) => (
                    <div key={key} className='d-flex gap-1 align-items-center'>
                        <input
                            type="checkbox"
                            id={brand}
                            value={brand}
                            onChange={handleBrandFilter}
                        />
                        <label htmlFor={brand}>{brand}</label>
                    </div>
                ))}
            </div>
            <p className='normal-text-color fw-semibold mt-4 '>Colors</p>
            <div className='d-flex flex-wrap gap-3'>
                {colors.map((color, key) => (
                    <div key={key} className='d-flex gap-1 align-items-center'>
                        <input
                            type="checkbox"
                            id={color}
                            value={color}
                            onChange={handleColorFilter}
                        />
                        <label htmlFor={color}>{color}</label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filters;
