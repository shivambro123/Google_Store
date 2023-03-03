import React, { useReducer, useState } from "react";
import InputComp from "./InputComp";
import "./NavCompcss.css";
import handlerClick from './InputComp'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../Context/ContextComp";

const NavbarComp = () => {

  const {state,dispatch}=useContext(DataContext)
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
   
        <div className="pt-2 new">
          <div className="main-ul">
            <div>
            <NavLink to="/"> <img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" height={30} width={30} alt="h" /></NavLink>
            </div>
            {(condition) ? 
             <InputComp cancel={cancelHandler}/>
            :null}
            <div>
              <div className="listdata">
                <ul style={{listStyleType:'none'}}>
                   {(condition)?null:<li onClick={()=>Handler(true)}><i class="fa fa-search" aria-hidden="true"></i></li>}
                    <li onMouseOver={overHandler} onMouseOut={outHandler}><NavLink to="https://support.google.com/store/?visit_id=638133653244604803-3298144664&hl=en-GB&rd=2#topic=3237699"><i class="fa fa-question-circle" aria-hidden="true"></i></NavLink></li>
                    <li style={{display:'inline'}}><NavLink to="/cart"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i><span className="count">{state.count}</span></NavLink></li>
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
