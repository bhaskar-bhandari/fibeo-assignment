import React from 'react'
import { MdFrontHand  } from "react-icons/md";
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';



const HeaderNav = () => {
  return (
    <Wrapper  className='header-section'>
        <div className='header' >
          <div className='hello'>
            <h3>Hello sharukh</h3><MdFrontHand />,
          </div>

          <div className='text'>
            <div className="search">
               <FaSearch className="search-icon" />
            </div>          
           <input type="text" placeholder='Search' className='input'/>
          </div>
        </div>
     
      
    </Wrapper>

   
  )
}

const Wrapper = styled.section`
   .header{
    display:flex;
    justify-content:space-between;
    margin: 2rem;
   }
   .text{
    display: flex;
    align-items: center;
    background-color:${({theme})=>theme.colors.white};
    padding-left: 10px;
   
    border-radius:5px;
   }
   .input {
    padding: 0.3rem;
    border:none;
}
   .hello{
    
    display:flex;
    justify-content:center;
    align-items:center;
   }
   .search{
    display:flex;
    align-items:center;
    justify-content:center;
   }
   .search-icon{
    // background-color:${({theme})=>theme.colors.white};

    font-size: 1rem;
   }
   @media (max-width: ${({ theme }) => theme.media.screen}) {
    .header-section{
      width:90%;
    }
  }
`

export default HeaderNav
