import React from 'react'
import styled from 'styled-components'

const Months = () => {
  return (
    <Wrapper>
        <div className='months'>
           <div className='Jan'>Jan</div>
           <div className='Feb'>Feb</div>
           <div className='March'>Mar</div>
           <div className='April'>April</div>
           <div className='May'>May</div>
           <div className='June'>June</div>
           <div className='July'>July</div>
           <div className='Aug'>Aug</div>
           <div className='Sep'>Sep</div>
           <div className='Oct'>Oct</div>
           <div className='Nov'>Nov</div>
           <div className='Dec'>Dec</div>
        </div>
      
    </Wrapper>
  )
}
const Wrapper = styled.section`
    .months{
        display:flex;
        justify-content:space-evenly;
        padding:1rem 0;
    }
`

export default Months
