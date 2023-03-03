import React, { children, useReducer, useState } from 'react'
import { createContext } from 'react'

export const DataContext = createContext(null)

const reducer = (state,action) =>{
    switch(action.type){
        case 'Increment':
            return {
                count:state.count+1
            }
        case 'addTask':{
            return{
             task:[...state.task,action.value],
             count:state.count+1,
             total:state.total+(+action.price)

            }
        }
        case 'remove':{
            return{
                task:state.task.filter((ele,i)=>{
                    return (
                        i!=action.index
                    )
                }),
                count:state.count-1,
                total:state.total-(+action.price)
                
            }
           
        }
        default:
            return state
    }

}
const ContextComp = ({children}) => { 

const initialstate = {
    count:0,
    task:[],
    total:0
}

const [state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>

        <DataContext.Provider value={{state,dispatch}}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default ContextComp