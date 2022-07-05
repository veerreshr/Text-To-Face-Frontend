import { useState } from 'react'
import logo from './logo.svg'
import NavBar from './components/navbar'
import Box  from '@mui/material/Box'
import LandingScreen from './screens/LandingScreen'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Model1Screen from './screens/Model1Screen'
import NotFound from './screens/NotFound'
import Model2Screen from './screens/Model2Screen'


function App(props:any) {
  return (
    <BrowserRouter>
      <NavBar {...props}/>
      <Box sx={{padding:"2em"}}>
      <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="model1" element={<Model1Screen />} />
      <Route path="model2" element={<Model2Screen />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      </Box>
     
    </BrowserRouter>
  )
}

export default App
