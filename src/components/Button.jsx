import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Button = () => {
  return (
    <Wrapper>
       <NavLink
          to="/">    
          <button className='button'>Back To Home</button>         
      </NavLink>
    </Wrapper>
  )
}

const Wrapper = styled.section`
   .button{
    height:4rem;
    width:8rem;
    background-color:lightgreen
   }
`

export default Button
