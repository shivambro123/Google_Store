import React from 'react'
import './CartNavcss.css'
import { NavLink } from 'react-router-dom'

const CartNav = () => {
  return (
    <div>
        <div className="pt-2 new">
          <div className="main-ul">
            <div>
            <NavLink to="/"> <img src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" height={30} width={30} alt="logo" /></NavLink>
            </div>
            <div>
                <span className='cartNav-title'>Basket</span>
            </div>
            <div className='hh'>
              <div className="listdata">
                <ul style={{listStyleType:'none'}}>
                    <li><NavLink><img src="profile_pic.jpeg"
                    height={30}
                    width={30}
                    style={{borderRadius:'50px'}}
                    alt="img"/></NavLink></li>
                </ul>
              </div>
            </div>
          </div>

          </div>
        
    </div>
  )
}

export default CartNav