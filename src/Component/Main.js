import React from 'react'
import NavbarComp from './HomeComp/NavbarComp'
import MainProduct from './Product/MainProduct'
import HeroComp from './Title/HeroComp'
import { DataContext } from './Context/ContextComp'
import { useContext } from 'react'

const Main = () => {
  const {state,dispatch}=useContext(DataContext);

  return (
    <>
    <NavbarComp/>
    <HeroComp/>
    <MainProduct/>
  
    </>
  )
}

export default Main