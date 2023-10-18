import React from 'react'
import styled from 'styled-components'
import { CiCoinInsert } from "react-icons/ci";
import { TbAd2,TbBasket,TbLockPause } from "react-icons/tb";

const StockDetails = () => {
  return (
    <Wrapper>
      <container className='four-container'>
        <div className="four-column">
            
              <div className="month-earning details">
                 <div className='dollor dollor1'><CiCoinInsert/></div>
                 <div>
                    <p className='earnings'>Earnings</p>
                    <p className='rupee'>$198k</p>
                    <p className='change'>37% this month</p>
                 </div>
               
              </div>
   
               <div className="orders details">
                  <div className="dollor ordertb"><TbAd2/></div>
                  <div>
                  <p className='earnings'>Orders</p>
                    <p className='rupee'>$2.4k</p>
                    <p className='change'>37% this month</p>
                  </div>
               </div>

               <div className="balance details">
               <div className="dollor balancetb"><TbLockPause/></div>
                  <div>
                  <p className='earnings'>Balance</p>
                    <p className='rupee'>$2.4k</p>
                    <p className='change'>37% this month</p>
                  </div>
               </div>

                <div className="total-sales details">
                <div className="dollor salestb"><TbBasket/></div>
                  <div>
                  <p className='earnings'>Total Sales</p>
                    <p className='rupee'>$89k</p>
                    <p className='change'>37% this month</p>
                  </div>
                </div>
            
             
           
        </div>
      </container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
     .four-container{
      margin: 0 auto;
     }
    .four-column{
      display:flex;
      justify-content:space-evenly;
    }
    
   .details{
      background-color:${({theme})=>theme.colors.white};
      height: 8rem;
      width: 21%;
      display:flex;
      align-items:center;
      padding-left: 1rem;  
      border-radius:10px;
   }
   .dollor{
    width: 47%;
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 4rem;
   }
   .dollor1{
    background-color: lightgreen;
    color: green;
    margin-right:0.5rem;
   }
   .ordertb{
     background-color:#e0aae3;
     color:#7110e8;
     margin-right:0.5rem;
   }
   .salestb{
    color:#ed113d;
    background-color:#f5ced5;
    margin-right:0.5rem;
   }
   .balancetb{
    color:#106beb;
    background-color:#b7d7eb;
    margin-right:0.5rem;
   }
   .earnings{
    color:#8b858f;
    font-size:0.6rem;
   }
   .rupee{
    font-weight:700;
   }
   .change{
    font-size: .7rem;
   }
   @media (max-width: ${({ theme }) => theme.media.tab}) {
    .four-column {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 20px;
      grid-column-gap: 20px;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 2rem;
  }
  .details {
    width: 100%;
  }
  .dollor {
    width: 28%;
  }
  
 
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .four-column{
      display:grid;
      grid-template-columns:1fr;
      height: 35rem;
      
    }
    .dollor {
      width: 21%;
  }
  }
`

export default StockDetails
