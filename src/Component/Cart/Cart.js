import React, { useState } from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { DataContext } from '../Context/ContextComp'
import CartNav from './CartNav';

const Cart = ({product}) => {
    const {state,dispatch} = useContext(DataContext);

   console.log(state.count)
    console.log(state.task)
  return (
    <>
    <CartNav/>
    <div>
        {(state.count!=0)?
        <div className='item-wrapper'>
      {state.task.map((val,ind)=>{
        return (
            <>
    <div className='item-container'>
    <div className='item-div'>
    <img
    src={val.src}
    className='imagesize'
    alt="image"/>

    </div>

    <div className='item-name'>
       <span>{val.title}</span> 
       <br/>
       <button className="btn btn-light" onClick={()=>dispatch({type:'remove',value:product,index:ind})}>Remove</button>
    </div>
    </div></>
        )
      })}
 
    </div>
        :<div className='empty'><h1>Basket is empty</h1></div>

}

   
    </div>
    </>
  )
}

export default Cart