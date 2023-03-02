import React, { useState } from "react";
import InputComp from "./InputComp";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./NavCompcss.css";
import handlerClick from './InputComp'
import NavLink from "react-bootstrap/esm/NavLink";

const NavbarComp = () => {
    const [condition,setCondition]=useState(false)
    const [over,setOver]=useState(false)
    const Handler =(res)=>{
        setCondition(res)
        console.log('yes')
    }
    const overHandler = () =>{
        setOver(true)

    }
    const outHandler = () =>{
        setOver(false)
    }
const cancelHandler=()=>{
    setCondition(false);
  }

  return (
    <>
   
        <div className="px-5 pt-2 new">
          <div className="main-ul">
            <div>
            <NavLink to="/"> <img src="google_logo.png" height={30} width={30} alt="logo" /></NavLink>
            </div>
            {(condition) ? 
             <InputComp cancel={cancelHandler}/>
            :null}
            <div>
              <div className="listdata">
                <ul style={{listStyleType:'none'}}>
                   {(condition)?null:<li onClick={()=>Handler(true)}><i class="fa fa-search" aria-hidden="true"></i></li>}
                    <li onMouseOver={overHandler} onMouseOut={outHandler}><NavLink><i class="fa fa-question-circle" aria-hidden="true"></i></NavLink></li>
                    <li><NavLink to="/cart"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></NavLink></li>
                    <li><NavLink><img src="profile.jpeg"
                    height={30}
                    width={30}
                    style={{borderRadius:'50px'}}
                    alt="img"/></NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          {(over)?<button className="gethelp">Get Help</button>:null}

          </div>
        
       
          </>
  );
};

export default NavbarComp;
