import { ThemeProvider } from 'styled-components';
import './App.css';
import { GlobalStyle } from './GlobalStyle'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Product from "./Product"
import Customers from "./Customers"
import Income from "./Income"
import Promote from "./Promote"
import Help from "./Help"


function App() {
  const theme = {
      colors : {
        heading: "rgb(24 24 29)",
        text: "rgb(24 24 29)",
        white: "#fff",
        background_color: "#E7E9EB",
        dashboard:"rgb(0, 0, 74)",
        black: " #212529",
        helper: "#8490ff",
        bg: "rgb(249 249 255)",
        footer_bg: "#0a1435",
        btn: "rgb(98 84 243)",
        border: "rgba(98, 84, 243, 0.5)",
        hr: "#ffffff",
        gradient:
          "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
        shadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
        shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
      media: { mobile: "768px", tab: "998px" },   
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle />
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/product' element={<Product />}/>
         <Route path='/customers' element={<Customers />}/>
         <Route path='/income' element={<Income />}/>
         <Route path='/promote' element={<Promote />}/>
         <Route path='/help' element={<Help />}/>
      </Routes>
         
      </BrowserRouter>       
    </ThemeProvider>
  )
}

export default App;
