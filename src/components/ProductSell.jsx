import React from 'react'

import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa';

const ProductSell = () => {
  return (
    <Wrapper className='cart' >
      <div className="center">
        <div className="product-container">
          <div className='margin-below'>
           <div className='search grid'>
              <h3 className='product-sell'>Product Sell</h3>
              <div className="stock-item grid">
                   <div className='text-bar'>
                       <div className="search">
                          <FaSearch className="search-icon" />
                        </div>          
                        <input type="text" placeholder='Search' className='input'/>
                    </div>
                  </div>
            <div className='sale'>
              <select name="sales" id="sales">
                    <option value="quaterly">last 30 days</option>
                    <option value="monthly">1week</option>
              </select>
              </div>

           </div>
          </div>
           <div className="total-products grid">
              <p className='p2'>Product Name</p>
              <p className='p2'>Stock</p>
              <p className='p2'>Price</p>
              <p className='p2'>Total Sales</p>
            </div>
    
    

<hr />

{/* products */}

      <div className="p-container">
        <div className="total-products grid ">
                <div>
                  <p className='bolder'>Abstract 3D</p>
                  <p className='p2'>Lorem ipsum dolor sit amet.</p>
                </div>        
                <p> 32 in stock</p>
                <p className='bold'>$45.99</p>
                <p>20</p>       
        </div>
        <div className="total-products grid ">
                <div>
                  <p className='bolder'>Abstract 3D</p>
                  <p className='p2'>Lorem ipsum dolor sit amet.</p>
                </div>        
                <p> 32 in stock</p>
                <p className='bold'>$45.99</p>
                <p>20</p>       
        </div>
    </div> 
</div>
</div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
   .center{
    display:flex;
    justify-content:center;
   }
   .product-container{
    background-color:${({theme})=>theme.colors.white};
    padding:2rem;
    width:95%;
    border-radius:5px;
   }
 
   .product-sell-heading{
    margin-bottom:2rem;
   }
   
   .product-sell{
    font-weight:700;
    font-size:1.1rem;
   }
   .search-bar{
     margin-bottom:2rem;
   }
   .text-bar{
    display: flex;
    align-items: center;
    padding-left: 10px;
    background-color:${({theme})=>theme.colors.background_color};
    border-radius:5px;
    margin-right:1rem;
   }
   .input {
    padding: 0.3rem;
    border:none;
    background-color:${({theme})=>theme.colors.background_color};
}
  .search{
    grid-template-columns:50% 25% 25%;
  }
  .margin-below{
    margin-bottom:1rem;
  }
   .search-icon{
    font-size: 1rem;
   }
   .sale{
    margin-left:4.1rem;
   }
   .total-products{
    grid-template-columns: 35% 20% 20% 19%;
    margin-bottom: 1rem;
    margin-top: 1rem;
   }
   .p2{
    color: #8b858f;
    font-size: 0.6rem;
   }
   .bold{
    font-weight:600;
   }
   .bolder{
    font-weight:800;
   }
   @media (max-width: ${({ theme }) => theme.media.tab}) {
    .search {
      grid-template-columns: 39% 21% 20%;
  }
  
  .input {
     
      width: 7rem;
   }
   `

export default ProductSell
