import React from 'react'
import './ProductFiltercss.css'

const ProductFilder = () => {
  return (
    <>
    <div className='wrapper-field'>
    <div className='product-title'>Product Type</div>
    <div className='product-checkbox'> 
    <input type="checkbox"/><span>Connected home</span><br/>
        <input type="checkbox"/><span>Phones</span>
        </div>
    </div>
    </>
  )
}

export default ProductFilder