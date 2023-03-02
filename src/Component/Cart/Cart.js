import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { DataContext } from '../Context/ContextComp'

const Cart = ({product}) => {
    const {state,dispatch} = useContext(DataContext);
    console.log(state.task)
  return (
    <div>
        casrt
        {state.count}
        <div className='item-wrapper'>
      {state.task.map((val)=>{
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
       <button onClick={()=>dispatch({type:'addTask',value:product})}>Add to Cart</button>
    </div>
    </div></>
        )
      })}
 
       
    </div>
    <NavLink to="/">Back to Home</NavLink>
    </div>
  )
}

export default Cart