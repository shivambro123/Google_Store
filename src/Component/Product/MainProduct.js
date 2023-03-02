import React from 'react'
import ProductFilder from '../Product/ProductFilder'
import './MainProductcss.css'
import ProductList from './ProductList'

const MainProduct = () => {
  return (
    <>
    <div className='product-wrapper'>
    <div className='product-filter'><ProductFilder/></div>
    <div className='product-item'><ProductList/></div>
    </div>
    </>
  )
}

export default MainProduct