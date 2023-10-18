import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //font-family: "Work Sans", sans-serif;
  }


  
   h2 {
     color: ${({ theme }) => theme.colors.heading};
     font-size: 4.4rem;
     font-weight: 300;
     white-space: normal;
    
    }
  
  h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }
  .container {
    margin: 0 auto;
    
  }
  
  .grid {
    display: grid;
  } 
  .grid-four-column{
    grid-template-columns:repeat(4, 1fr)
  }
  .grid-two-column{
    grid-template-columns:1fr 1fr;
  }
  .grid-three-column{
    grid-template-columns:repeat(3, 1fr)
  }

`