import React from 'react'
import {Doughnut} from 'react-chartjs-2'
import {Chart as ChartJS, Tooltip,Title,ArcElement,Legend } from 'chart.js';
import styled from 'styled-components';
ChartJS.register(
    Tooltip,Title,ArcElement,Legend
) ;

const Customers = () => {
    const data = {
        labels:[],
        datasets:[{
            label:"Poll",
            data:[6,3],
            backgroundColor:['lightgreen','#E7E9EB'],
            borderColor:['lightgreen','#E7E9EB'],
            
        }]
    }
    const options={

    }
  return (
    <Wrapper>
        <div className='text'>
        <h3 className='customer'>Customers</h3>
      <p className='buy'>customers that buy product</p>
        </div>
       
    <div className='nut'>
      
      <div className='size'>
         <Doughnut
            data = {data}
            options = {options}>
                65% 
                <p>Total new</p>
                <p>Customers</p>
         </Doughnut>
      </div>
      

    </div>
    </Wrapper>
  
  )
}
const Wrapper = styled.section`
    .customer{
        font-weight:700;
        font-size:1.1rem;
    }
    .buy{
        color:#8b858f;
        font-size:0.6rem;
    }
    .size{
        width:60%;
        height:60%;
        display: flex;
        justify-content: center;
        align-items: center;
       // margin-top:20px
    }
    .nut{
      
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .text{
        padding:1.5rem;
    }
    @media (max-width: ${({ theme }) => theme.media.tab}) {
        .size {
            width: 16%;
        }
        .text {
            text-align:center;
    }
`

export default Customers

