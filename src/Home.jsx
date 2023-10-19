import React from 'react'
import styled from 'styled-components'
import NavBar from './components/NavBar'
import MainPart from './components/MainPart'

const Home = () => {
  return (
    <Wrapper>
      <div className='container grid grid-dashboard-column'>
        <div className='left-container'>
         <h1 className='dash'>DashBoard</h1> 
           <NavBar />
           <div className='manager'>
             <p className='p1'>Bhaskar</p>
             <p className='p2'>Product Manager</p>
           </div>
        </div>
        
        <div className="right-container">
           <MainPart/>
        </div>
      </div>
    </Wrapper>
    
  )
}

const Wrapper = styled.section`
   .grid-dashboard-column{
    grid-template-columns: 0.2fr 1fr;
    height:100%;
   }
   .left-container{
    background-color:${({theme})=>theme.colors.dashboard};
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    position:relative;
   }
  .right-container{
    background-color:${({theme})=>theme.colors.background_color};
  }
  .dash{
    font-size: 1.5rem;
    color: white;
  }
  .manager{
    position: absolute;
    color: white;
    width: 80%;
    border-radius: 5px;
    left: 1rem;
    
    bottom: 2rem;
    padding: 7px;
      background-color: grey;
  }
  .p1 {
    font-weight: 700;
    font-size: 1.1rem;
}
.p2 {
  
  font-size: 0.6rem;
}
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-dashboard-column{
      grid-template-columns:1fr;
      height:100%;
     }
     .left-container {
      background-color: rgb(0, 0, 74);
      // display: grid;
      // grid-template-columns: 1fr 1fr 1fr;
     }   
    .manager {
      width: 24%;
      position: absolute;
      height: 4rem;
      top: 12px;
      padding-top: 0rem;
      background-color: transparent;
  }
  .dash {
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }
   
`

export default Home
