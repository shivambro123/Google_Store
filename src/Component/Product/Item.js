import React from 'react'
import './Itemcss.css'

const Item = ({src,title}) => {
    console.log(title)
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
       <span>{title}</span> 
    </div>
    </div>
    </>
  )
}

export default Item