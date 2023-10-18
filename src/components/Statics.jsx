import React from 'react'
import styled from 'styled-components';
import Chart from './Chart';
import Months from './Months';
import Customers from './Customers';


const Statics = () => {
  return (
    <Wrapper>
       <div className="statics">
         <div className="monthly-earnings"> 
           <div className="earnings">
              <div className="overview">
                <p className='p1'>Overview</p>
                <p className='p2'>Monthly Earnings</p>
              </div>

              <div className="quaterly">
                <select name="sort" id="sort">
                    <option value="quaterly">quaterly</option>
                    <option value="monthly">Monthly</option>
                </select>
              </div>
           </div>
             <Chart />
             <Months/>

         </div>

         <div className="customers">
            <Customers/>
         </div>

       </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .statics{
    height:20rem;
    margin-top:2rem;
    margin-bottom:2rem;
    display:flex;
    justify-content:space-evenly;
  }
  .monthly-earnings{
    width: 65%;
    height: 100%;
    background-color: white;
    border-radius:6px;
   
  }
  .earnings{
    display:flex;
    justify-content:space-between;
    padding:1.5rem;
  }
  
  .p1{
    font-weight:700;
    font-size:1.1rem;
  }
  .p2{
    color:#8b858f;
    font-size:0.6rem;
  }
  .customers{
    width: 27%;
    height: 100%;
    background-color: white;
    border-radius:6px;
  }
  .chart{
    display:flex;
    justify-content:space-evenly;
    align-items: baseline;
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .statics {
      height: 33rem;
      flex-direction: column;
  }
  .monthly-earnings {
    width: 100%;
  }
  .customers {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 6px;
    margin-top: 1rem;
}
  }
` 

export default Statics
