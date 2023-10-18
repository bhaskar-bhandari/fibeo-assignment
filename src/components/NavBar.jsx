import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlineDashboard } from "react-icons/ai";
import { TiThLargeOutline } from "react-icons/ti";
import { PiUserPlusBold,PiHeadsetBold,PiCrosshairSimpleFill } from "react-icons/pi";
import { FiHelpCircle  } from "react-icons/fi";
import {  TiChevronRight } from "react-icons/ti";

const NavBar = () => {
  return (
    
    <Nav>
        <div className='nav-container'>
        <ul className='navbar-lists'>
            <li>
              <NavLink
                to="/">
                   <AiOutlineDashboard/> dashboard <TiChevronRight className='icon' dashboard/>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/product">
                   <TiThLargeOutline/> Product<TiChevronRight className='icon product'/>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/customers">
                
                   <PiUserPlusBold/> Customers<TiChevronRight className='icon customer'/>
         
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/income">
                
                   <PiHeadsetBold/> Income <TiChevronRight className='icon income'/>
                  
                  </NavLink>
            </li>

            <li>
              <NavLink
                to="/promote">
                   <PiCrosshairSimpleFill/>Promote <TiChevronRight className='icon promote'/>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/help">
                <FiHelpCircle/> Help <TiChevronRight className='icon help'/>
              </NavLink>
            </li>
        </ul>
    </div>
  
    
    </Nav>
    
    
    
  )
}
const Nav = styled.nav`
.nav-container{
  margin-top:4rem;
 
}
    .navbar-lists{
        display:flex;
        flex-direction:column;
        list-style-type:none;
        li{
          list-style:none;
          margin-bottom:1.3rem;
        }
        a{
            color:${({theme})=>theme.colors.white};
            text-decoration: none;
            cursor:pointer;
        }
        
    }
    .product{
      margin-bottom: -0.2rem;
    }
    .customer{
      margin-bottom: -0.2rem;
    }
    .income{
      margin-bottom: -0.2rem;
    }
    .promote{
      margin-bottom: -0.2rem;
    }
    .help{
      margin-bottom: -0.2rem;
    }
  
`

export default NavBar
