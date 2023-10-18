import React from 'react'
import styled from 'styled-components'

const Chart = () => {
  return (
    <Wrapper>
      <div className="chart">
         <div className="jan same-width-height"></div>
         <div className="feb same-width-height"></div>
         <div className="march same-width-height"></div>
         <div className="april same-width-height"></div>
         <div className="may same-width-height"></div>
         <div className="june same-width-height"></div>
         <div className="july same-width-height"></div>
         <div className="aug same-width-height"></div>
         <div className="sep same-width-height"></div>
         <div className="oct same-width-height"></div>
         <div className="nov same-width-height"></div>
         <div className="dec same-width-height"></div>
      </div>
      
    </Wrapper>
  )
}
const Wrapper = styled.section`
   .same-width-height{
    border-radius:11px;
   }
    
   .jan{
    height:5rem;
      width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .feb{
    height:4rem;
    width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .march{
    height:10rem;
      width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .april{
    height:6rem;
    width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .may{
    height:8rem;
      width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .june{
    height:8rem;
      width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .july{
    height:8rem;
      width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .aug{
    height:10rem;
      width:2.5rem;
    background-color:lightgreen;
   }
   .sep{
    height:10rem;
      width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .oct{
    height:10rem;
      width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .nov{
    height:10rem;
      width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
   .dec{
    height:10rem;
      width:2.5rem;
    background-color:${({theme})=>theme.colors.background_color};
   }
`

export default Chart 
