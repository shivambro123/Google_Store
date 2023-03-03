import React, { useState } from 'react'
import './Itemcss.css'
import { useContext } from 'react'
import { DataContext } from '../Context/ContextComp'


const Item = ({src,title,price,product}) => {
  const {state,dispatch}=useContext(DataContext)
      console.log(title)
  const [click,setClick]=useState(true)


  return (
    <>
    <div className='item-container'>
    <div className='item-div'>
    <img
    src={src}
    className='imagesize'
    alt="image"/>

    </div>

    <div className='item-name'>
      <div className='info'>
      <div>{title}</div> 
       <div>Rs:{price}</div>
      </div>
    {(click)?<button className='btn btn-light button' onClick={()=>{dispatch({type:'addTask',value:product,price:price});setClick(false)}}>Add to Cart</button>:<button className='btn btn-secondary button'>Added</button>}

    </div>

    </div>
    </>
  )
}

export default Item