import React, { useEffect, useState } from 'react'
import Item from './Item'
import './ProductListcss.css'
import { data } from '../Data/Data'

const ProductList = ({product}) => {
    const [store,setStore]=useState({});
  console.log(product)
  return (
    <>
    <div className='item-wrapper'>
   { data.map((val,index)=>{
    console.log(val.src)
        return <Item src={val.src} title={val.title} product={val}/>
    })
}
      </div>
    </>
  )
}

export default ProductList