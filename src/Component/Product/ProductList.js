import React, { useEffect, useState } from 'react'
import Item from './Item'
import './ProductListcss.css'
import { data } from '../Data/Data'

const ProductList = () => {
    const [store,setStore]=useState({});
  

  return (
    <>
    <div className='item-wrapper'>
   { data.map((val)=>{
    console.log(val.src)
        return <Item src={val.src} title={val.title}/>
    })
}
      </div>
    </>
  )
}

export default ProductList