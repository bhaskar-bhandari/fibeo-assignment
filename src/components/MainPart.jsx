import React from 'react'
import styled from 'styled-components'
import HeaderNav from './HeaderNav'
import StockDetails from './StockDetails'
import Statics from './Statics'
import ProductSell from './ProductSell'

const MainPart = () => {
  return (
    <Wrapper>
      <div className='main-container'>
        <HeaderNav/>
        <StockDetails/>
        <Statics/>
        <ProductSell/>
      </div>
      
    </Wrapper>
  )
}
const Wrapper = styled.header`
   .main-container{
    
    height:100%;
   }
`

export default MainPart
